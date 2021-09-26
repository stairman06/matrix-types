/**
 * Response from GET `/_matrix/client/r0/joined_rooms`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0login
 */
export interface JoinedRoomsResponse {
  joined_rooms: string[];
}
