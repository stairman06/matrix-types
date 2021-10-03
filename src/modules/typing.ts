import { MatrixEventBase } from '../events';

export type Events = TypingEvent;

export type EventContents = TypingEventContent;

export type TypingEvent = MatrixEventBase<'m.typing', TypingEventContent>;

export interface TypingEventContent {
  user_ids: string[];
}
