import * as Messaging from './modules/messaging';
import * as Typing from './modules/typing';
import * as Presence from './modules/presence';
import * as RoomEvents from './client/rooms/events';
import * as E2EE from './modules/e2ee/events';
import * as Verification from './modules/e2ee/verification';
import * as Spaces from './modules/spaces';

/**
 * A holder for events
 *
 * Takes two generic inputs:
 * the first one is a union of Message Events,
 * the second is a union of State Events
 *
 * The second union is optional. To specify nothing,
 * use `never`.
 */
export interface EventsHolder<
  M extends MatrixEventBase<any, any> | never = never,
  S extends MatrixEventBase<any, any> | never = never
> {
  message: M;
  state: S;
  all: M | S;
}

type EventHolders =
  | Messaging.Events
  | Typing.Events
  | Presence.Events
  | RoomEvents.Events
  | E2EE.Events
  | Verification.Events
  | Spaces.Events;

export interface MatrixEventBase<T extends string, C extends any> {
  type: T;
  content: C;
}

export interface MatrixStateEventBase<T extends string, C extends any>
  extends MatrixEventBase<T, C> {
  state_key: string;
}

/**
 * Basic Matrix event. Includes ONLY `type` and `content` fields.
 * This is for both message and state events
 */
export type MatrixEvent = EventHolders['all'];
export type MatrixMessageEvent = EventHolders['message'];
export type MatrixStateEvent = EventHolders['state'];

export type MatrixEventType = MatrixEvent['type'];
export type MatrixEventContent = MatrixEvent['content'];
export type MatrixEventContentMap = {
  [t in MatrixEventType]: Extract<MatrixEvent, { type: t }>['content'];
};

export type ToDeviceEvent = MatrixEvent & {
  sender?: string;
};

export type StateEventType = MatrixStateEvent['type'];
export type StateEventMap = {
  [t in StateEventType]: Extract<EventHolders['state'], { type: t }>;
};

export type StrippedStateEvent = MatrixStateEvent & {
  sender: string;
};

// TODO move somewhere else
export interface Signatures {
  [server: string]: {
    [alg: string]: string;
  };
}

export * from './modules/messaging';
