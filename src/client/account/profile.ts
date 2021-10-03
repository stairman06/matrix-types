/**
 * Request body for PUT `/_matrix/client/r0/profile/{userId}/avatar_url`
 *
 * https://spec.matrix.org/unstable/client-server-api/#put_matrixclientr0profileuseridavatar_url
 */
export interface SetAvatarUrlRequest {
  avatar_url?: string;
}

/**
 * Request body for PUT `/_matrix/client/r0/profile/{userId}/displayname`
 *
 * https://spec.matrix.org/unstable/client-server-api/#put_matrixclientr0profileuseriddisplayname
 */
export interface SetDisplayNameRequest {
  displayname?: string;
}
