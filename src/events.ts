import * as Messaging from './modules/messaging';
import * as Typing from './modules/typing';
import * as Presence from './modules/presence';
import * as RoomEvents from './client/rooms/events';

export interface MatrixEventBase<T extends string, C extends any> {
  type: T;
  content: C;
}

/**
 * Basic Matrix event. Includes ONLY `type` and `content` fields.
 */
export type MatrixEvent =
  | Messaging.Events
  | RoomEvents.Events
  | Presence.Events
  | Typing.Events;

export type MatrixEventType = MatrixEvent['type'];
export type MatrixEventContent = MatrixEvent['content'];
export type MatrixEventContentMap = {
  [t in MatrixEventType]: Extract<MatrixEvent, { type: t }>['content'];
};

export type ToDeviceEvent = MatrixEvent & {
  sender?: string;
};

export type StateEvent = MatrixEvent & {
  state_key: string;
};

export type StrippedStateEvent = MatrixEvent & {
  sender: string;
  state_key: string;
};

export * from './modules/messaging';
