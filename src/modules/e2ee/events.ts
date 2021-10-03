import { EventsHolder, MatrixEventBase } from '../../events';
import { MatrixEncryptionAlgorithm } from '../crypto';
import { WithheldCode } from './keys';

export type Events = EventsHolder<
  | EncryptedEvent
  | RoomKeyEvent
  | RoomKeyRequestEvent
  | ForwardedRoomKeyEvent
  | DummyEvent,
  RoomEncryptionEvent
>;

export type RoomEncryptionEvent = MatrixEventBase<
  'm.room.encryption',
  RoomEncryptionEventContent
>;

export interface RoomEncryptionEventContent {
  algorithm: 'm.megolm.v1.aes-sha2';
  rotation_period_ms?: number;
  rotation_period_msgs?: number;
}

export type EncryptedEvent = MatrixEventBase<
  'm.room.encrypted',
  EncryptedEventContent
>;

export interface EncryptedEventContent {
  algorithm: MatrixEncryptionAlgorithm;
  ciphertext: string;
  device_id?: string;
  sender_key: string;
  session_id?: string;
}

export type RoomKeyEvent = MatrixEventBase<'m.room_key', RoomKeyEventContent>;

export interface RoomKeyEventContent {
  algorithm: 'm.megolm.v1.aes-sha2';
  room_id: string;
  session_id: string;
  session_key: string;
}

export type RoomKeyRequestEvent = MatrixEventBase<
  'm.room_key_request',
  RoomKeyRequestEventContent
>;

export interface RoomKeyRequestEventContent {
  action: 'request' | 'request_cancellation';
  body?: RequestedKeyInfo;
  request_id: string;
  requesting_device_id: string;
}

interface RequestedKeyInfo {
  algorithm: MatrixEncryptionAlgorithm;
  room_id: string;
  sender_key: string;
  session_id: string;
}

export type ForwardedRoomKeyEvent = MatrixEventBase<
  'm.forwarded_room_key',
  ForwardedRoomKeyEventContent
>;

export interface ForwardedRoomKeyEventContent {
  algorithm: MatrixEncryptionAlgorithm;
  forwarding_curve25519_key_chain: string[];
  room_id: string;
  sender_claimed_ed25519_key: string;
  sender_key: string;
  session_id: string;
  session_key: string;
  witheld?: {
    code: WithheldCode;
    reason?: string;
  };
}

export type DummyEvent = MatrixEventBase<'m.dummy', {}>;
