/**
 * Response from GET `/_matrix/client/r0/joined_rooms`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0login
 */
export interface JoinedRoomsResponse {
  joined_rooms: string[];
}

export type RoomVersion = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
