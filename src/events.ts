import * as Messaging from './modules/messaging';

export interface MatrixEventBase<T extends string, C extends any> {
  type: T;
  content: C;
}

export type EventMap = {
  'm.room.message': Messaging.MessageEvent;
};

/**
 * Basic Matrix event. Includes ONLY `type` and `content` fields.
 */
export type MatrixEvent = Messaging.MessageEvent;

export * from './modules/messaging';
