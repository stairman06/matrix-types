/**
 * Response from GET `/.well-known/matrix/client`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#getwell-knownmatrixclient
 */
export interface WellKnownResponse {
  'm.homeserver': {
    base_url: string;
  };
  'm.identity_server'?: {
    base_url: string;
  };
}
