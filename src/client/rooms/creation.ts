import { StateEvent } from '../../events';
import { ThreePidMedium } from '../account/threepid';
import { RoomVersion } from '../rooms';
import { PowerLevelsEventContent } from './events';

export type CreateRoomPreset =
  | 'private_chat'
  | 'trusted_private_chat'
  | 'public_chat';

export type RoomVisibility = 'public' | 'private';

/**
 * Request body for POST `/_matrix/client/r0/createRoom`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0createroom
 */
export interface CreateRoomRequest {
  creation_content?: CreationContent;
  initial_state?: StateEvent[];
  invite?: string[];
  invite_3pid?: Invite3pid[];
  is_direct?: boolean;
  name?: string;
  power_level_content_override?: PowerLevelsEventContent;
  preset?: CreateRoomPreset;
  room_alias_name?: string;
  room_version?: RoomVersion;
  topic?: string;
  visibility?: RoomVisibility;
}

interface CreationContent {
  'm.federate'?: boolean;
}

interface Invite3pid {
  address: string;
  id_access_token: string;
  id_server: string;
  medium: ThreePidMedium;
}

/**
 * Response from POST `/_matrix/client/r0/createRoom`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0createroom
 */
export interface CreateRoomResponse {
  room_id: string;
}
