/**
 * Query for GET `/_matrix/client/r0/register/available`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0registeravailable
 */
export interface UsernameAvailableQuery {
  username: string;
}

/**
 * Response from GET `/_matrix/client/r0/register/available`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0registeravailable
 */
export interface UsernameAvailableResponse {
  available?: boolean;
}
