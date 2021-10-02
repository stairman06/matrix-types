import * as Messaging from './modules/messaging';

export interface MatrixEventBase<T extends string, C extends any> {
  type: T;
  content: C;
}

export type EventMap = {
  'm.room.message': Messaging.MessageEvent;
};

export type MatrixEventContent = Messaging.MessageEventContent;

/**
 * Basic Matrix event. Includes ONLY `type` and `content` fields.
 */
export type MatrixEvent = Messaging.MessageEvent;

export type ToDeviceEvent = MatrixEvent & {
  sender?: string;
};

export type StrippedStateEvent = MatrixEvent & {
  sender: string;
  state_key: string;
};

export * from './modules/messaging';
