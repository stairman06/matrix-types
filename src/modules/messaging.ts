import { MatrixEventBase } from '../events';
import { EncryptedFile } from './crypto';

export type Events =
  | MessageEvent
  | RoomNameEvent
  | RoomTopicEvent
  | RoomAvatarEvent
  | RoomPinsEvent;

/**
 * An `m.room.message` event
 * https://spec.matrix.org/unstable/client-server-api/#instant-messaging
 */
export type MessageEvent = MatrixEventBase<
  'm.room.message',
  MessageEventContent
>;

type MsgType =
  | 'm.text'
  | 'm.emote'
  | 'm.notice'
  | 'm.image'
  | 'm.file'
  | 'm.audio'
  | 'm.video'
  | 'm.location';

// Base for each event content type
interface ContentBase {
  msgtype: MsgType;
  body: string;
}

/**
 * `m.text`, `m.emote` and `m.notice` events
 * https://spec.matrix.org/unstable/client-server-api/#mtext
 */
interface TextContentBase extends ContentBase {
  msgtype: 'm.text' | 'm.emote' | 'm.notice';
}

// Plain messages cannot support `format` or `formatted_body`,
// so it needs to be forbidden
interface TextContentPlain extends TextContentBase {
  format?: never;
  formatted_body?: never;
}

interface TextContentFormatted extends TextContentBase {
  // currently `org.matrix.custom.html` is the only format that does anything
  format: 'org.matrix.custom.html';
  formatted_body: string;
}

// union of both text content types,
// this is to allow `format` and `formatted_body` at the same time,
// but not only one
type TextContent = TextContentPlain | TextContentFormatted;

/**
 * Base info for each message `info` key
 * Provides keys related to thumbnails
 */
interface InfoBase {
  thumbnail_file?: EncryptedFile;
  thumbnail_info?: ThumbnailInfo;
  thumbnail_url?: string;
}

// Common mimetypes are taken from
// https://github.com/matrix-org/matrix-react-sdk/blob/45acf70b00cb0c51740455d09164b1c3c033b5f3/src/utils/blobs.ts#L51
// Matrix has no standardized required values however,
// so `string` is also allowed
// These are provided for autocomplete uses
type ImageMimetype = string | 'image/jpeg' | 'image/gif' | 'image/png';
type FileMimetype = string;
type VideoMimetype = string | 'video/mp4' | 'video/webm' | 'video/ogg';
type AudioMimetype =
  | string
  | 'audio/mp4'
  | 'audio/webm'
  | 'audio/aac'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/wave'
  | 'audio/wav'
  | 'audio/x-wav'
  | 'audio/x-pn-wav'
  | 'audio/flac'
  | 'audio/x-flac';

interface ThumbnailInfo {
  w?: number;
  h?: number;
  size?: number;

  mimetype?: ImageMimetype;
}

/**
 * `m.image` event
 * https://spec.matrix.org/unstable/client-server-api/#mimage
 */
interface ImageContent extends ContentBase {
  msgtype: 'm.image';

  file?: EncryptedFile;
  url?: string;

  info?: ImageInfo;
}

interface ImageInfo extends InfoBase {
  w?: number;
  h?: number;
  size?: number;

  mimetype?: ImageMimetype;
}

/**
 * `m.file` event
 * https://spec.matrix.org/unstable/client-server-api/#mfile
 */
interface FileContent extends ContentBase {
  msgtype: 'm.file';

  file?: EncryptedFile;
  url?: string;

  info?: FileInfo;
  filename?: string;
}

interface FileInfo extends InfoBase {
  size?: number;
  mimetype?: FileMimetype;
}

/**
 * `m.audio` event
 * https://spec.matrix.org/unstable/client-server-api/#maudio
 */
interface AudioContent extends ContentBase {
  msgtype: 'm.audio';

  file?: EncryptedFile;
  url?: string;

  info?: AudioInfo;
}

interface AudioInfo extends InfoBase {
  size?: number;
  duration?: number;

  mimetype?: AudioMimetype;
}

/**
 * `m.video` event
 * https://spec.matrix.org/unstable/client-server-api/#mvideo
 */
interface VideoContent extends ContentBase {
  msgtype: 'm.video';

  file?: EncryptedFile;
  url?: string;

  info?: VideoInfo;
}

interface VideoInfo extends InfoBase {
  w?: number;
  h?: number;
  size?: number;
  duration?: number;

  mimetype?: VideoMimetype;
}

/**
 * `m.location` event
 * https://spec.matrix.org/unstable/client-server-api/#mlocation
 */
interface LocationContent extends ContentBase {
  msgtype: 'm.location';

  geo_uri: string;
  info?: LocationInfo;
}

interface LocationInfo extends InfoBase {}

// Now we bundle all the event types together into one
export type MessageEventContent =
  | TextContent
  | ImageContent
  | FileContent
  | AudioContent
  | VideoContent
  | LocationContent;

export type RoomNameEvent = MatrixEventBase<
  'm.room.name',
  RoomNameEventContent
>;

export interface RoomNameEventContent {
  name: string;
}

export type RoomTopicEvent = MatrixEventBase<
  'm.room.topic',
  RoomTopicEventContent
>;

export interface RoomTopicEventContent {
  topic: string;
}

export type RoomAvatarEvent = MatrixEventBase<
  'm.room.avatar',
  RoomAvatarEventContent
>;

export interface RoomAvatarEventContent {
  info?: ImageInfo;
  url: string;
}

export type RoomPinsEvent = MatrixEventBase<
  'm.room.pinned_events',
  RoomPinsEventContent
>;

export interface RoomPinsEventContent {
  pinned: string[];
}
