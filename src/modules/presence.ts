import { MatrixEventBase } from '../events';

export type Events = PresenceEvent;

export type PresenceEvent = MatrixEventBase<'m.presence', PresenceEventContent>;

export interface PresenceEventContent {
  avatar_url?: string;
  currently_active?: boolean;
  displayname?: string;
  last_active_ago?: number;
  presence: 'online' | 'offline' | 'unavailable';
  status_msg?: string;
}
