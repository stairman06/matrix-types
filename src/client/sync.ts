import {
  MatrixEvent,
  MatrixEventContent,
  StrippedStateEvent,
  ToDeviceEvent,
} from '../events';
import { EncryptionAlgorithm } from '../modules/crypto';

/**
 * Query parameters for GET `/_matrix/client/r0/sync`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0sync
 */
export interface SyncQuery {
  filter?: string;
  full_state?: boolean;
  set_presence?: 'offline' | 'online' | 'unavailable';
  since?: string;
  timeout?: number;
}

// Common events
export type SyncStateEvent = StrippedStateEvent & {
  event_id: string;
  origin_server_ts: number;
  prev_content?: MatrixEventContent;
  unsigned?: UnsignedData;
};

interface UnsignedData {
  age?: number;
  redacted_because?: MatrixEvent;
  transaction_id?: string;
}

export type SyncRoomEvent = MatrixEvent & {
  event_id: string;
  origin_server_ts: number;
  sender: string;
  unsigned?: UnsignedData;
};

/**
 * Response from GET `/_matrix/client/r0/sync`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0sync
 */
export interface SyncResponse {
  account_data?: AccountData;
  device_lists?: DeviceLists;
  device_one_time_keys_count?: DeviceOneTimeKeysCount;
  next_batch?: string;
  presence?: Presence;
  rooms?: Rooms;
  to_device?: ToDevice;
}

interface AccountData {
  events?: MatrixEvent[];
}

interface DeviceLists {
  changed?: string[];
  left?: string[];
}

type DeviceOneTimeKeysCount = {
  [k in EncryptionAlgorithm]?: number;
};

interface Presence {
  events?: MatrixEvent[];
}

interface Rooms {
  invite?: Record<string, InvitedRoom>;
  join?: Record<string, JoinedRoom>;
  knock?: Record<string, KnockedRoom>;
  leave?: Record<string, LeftRoom>;
}

interface InvitedRoom {
  invite_state?: InviteState;
}

interface InviteState {
  events?: StrippedStateEvent[];
}

interface JoinedRoom {
  account_data?: AccountData;
  ephemeral?: Ephemeral;
  state?: RoomState;
  summary?: RoomSummary;
  timeline?: RoomTimeline;
  unread_notifications?: RoomUnreadNotificationsCount;
}

interface Ephemeral {
  events?: MatrixEvent[];
}

interface RoomState {
  events?: SyncStateEvent[];
}

interface RoomSummary {
  'm.heroes'?: string[];
  'm.invited_member_count'?: number;
  'm.joined_member_count'?: number;
}

interface RoomTimeline {
  events?: SyncRoomEvent[];
  limited?: boolean;
  prev_batch?: string;
}

interface RoomUnreadNotificationsCount {
  highlight_count?: number;
  notification_count?: number;
}

interface KnockedRoom {
  knock_state?: KnockState;
}

interface KnockState {
  events?: StrippedStateEvent[];
}

interface LeftRoom {
  account_data?: AccountData;
  state?: RoomState;
  timeline?: RoomTimeline;
}

interface ToDevice {
  events?: ToDeviceEvent[];
}
