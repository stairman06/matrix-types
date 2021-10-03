import * as Messaging from './modules/messaging';
import * as Typing from './modules/typing';
import * as RoomEvents from './client/rooms/events';

export interface MatrixEventBase<T extends string, C extends any> {
  type: T;
  content: C;
}

export type MatrixEventContent =
  | Messaging.EventContents
  | RoomEvents.EventContents
  | Typing.EventContents;

/**
 * Basic Matrix event. Includes ONLY `type` and `content` fields.
 */
export type MatrixEvent = Messaging.Events | RoomEvents.Events | Typing.Events;

export type ToDeviceEvent = MatrixEvent & {
  sender?: string;
};

export type StrippedStateEvent = MatrixEvent & {
  sender: string;
  state_key: string;
};

export * from './modules/messaging';
