import { RoomVisibility } from './creation';
import { JoinRule } from './events';

/**
 * Response from GET `/_matrix/client/r0/directory/list/room/{roomId}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0directorylistroomroomid
 */
export interface GetRoomVisibilityResponse {
  visibility?: RoomVisibility;
}

/**
 * Request body for PUT `/_matrix/client/r0/directory/list/room/{roomId}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#put_matrixclientr0directorylistroomroomid
 */
export interface SetRoomVisibilityRequest {
  visibility?: RoomVisibility;
}

/**
 * Query parameters for GET `/_matrix/client/r0/publicRooms`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0publicrooms
 */
export interface GetPublicRoomsQuery {
  limit?: number;
  server?: string;
  since?: string;
}

/**
 * Optional request body for POST `/_matrix/client/r0/publicRooms`
 *
 * Use this if you want to filter rooms.
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0publicrooms
 */
export interface FilterPublicRoomsRequest {
  filter?: {
    generic_search_term?: string;
  };
  include_all_networks?: boolean;
  limit?: number;
  since?: string;
  third_party_instance_id?: string;
}

/**
 * Response from GET `/_matrix/client/r0/publicRooms`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0publicrooms
 */
export interface GetPublicRoomsResponse {
  chunk: PublicRoomsChunk[];
  next_batch?: string;
  prev_batch?: string;
  total_room_count_estimate?: number;
}

interface PublicRoomsChunk {
  aliases?: string[];
  avatar_url?: string;
  canonical_alias?: string;
  guest_can_join: boolean;
  join_rule?: JoinRule;
  name?: string;
  num_joined_members: number;
  room_id: string;
  topic?: string;
  world_readable: boolean;
}
