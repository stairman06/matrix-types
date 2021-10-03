import { Signatures } from '../../events';

/**
 * Response from GET `/_matrix/client/r0/joined_rooms`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0login
 */
export interface GetJoinedRoomsResponse {
  joined_rooms: string[];
}

/**
 * Request body for POST `/_matrix/client/r0/knock/{roomId}/`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0knockroomidoralias
 */
export interface RoomKnockRequest {
  reason?: string;
}

/**
 * Response from POST `/_matrix/client/r0/knock/{roomId}/`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0knockroomidoralias
 */
export interface RoomKnockResponse {
  room_id: string;
}

/**
 * Request body for POST `/_matrix/client/r0/rooms/{roomId}/invite`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0roomsroomidinvite
 */
export interface RoomInviteRequest {
  reason?: string;
  user_id: string;
}

/**
 * Request body for POST `/_matrix/client/r0/join/{roomid}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0joinroomidoralias
 */
export interface JoinRoomRequest {
  reason?: string;
  third_party_signed?: ThirdPartySigned;
}

interface ThirdPartySigned {
  mxid: string;
  sender: string;
  signatures: Signatures;
  token: string;
}

/**
 * Response from POST `/_matrix/client/r0/join/{roomId}`;
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0joinroomidoralias
 */
export interface JoinRoomResponse {
  room_id: string;
}

/**
 * Request body for POST `/_matrix/client/r0/rooms/{roomId}/leave`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0roomsroomidleave
 */
export interface LeaveRoomRequest {
  reason?: string;
}

type ReasonAndUserId = {
  reason?: string;
  user_id: string;
};

/**
 * Request body for POST `/_matrix/client/r0/rooms/{roomId}/kick`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0roomsroomidkick
 */
export type KickFromRoomRequest = ReasonAndUserId;

/**
 * Request body for POST `/_matrix/client/r0/rooms/{roomId}/ban`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0roomsroomidban
 */
export type BanFromRoomRequest = ReasonAndUserId;

/**
 * Request body for POST `/_matrix/client/r0/rooms/{roomid}/unban`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0roomsroomidunban
 */
export type UnbanFromRoomRequest = ReasonAndUserId;
