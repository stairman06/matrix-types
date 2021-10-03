/**
 * Request body for POST `/_matrix/client/r0/user_directory/search`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0user_directorysearch
 */
export interface SearchUsersRequest {
  limit?: number;
  search_term: string;
}

/**
 * Response from POST `/_matrix/client/r0/user_directory/search`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0user_directorysearch
 */
export interface SearchUsersResponse {
  limited: boolean;
  results: User[];
}

interface User {
  avatar_url?: string;
  display_name?: string;
  user_id: string;
}

/**
 * Response from GET `/_matrix/client/r0/profile/{userId}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0profileuserid
 */
export interface GetProfileResponse {
  avatar_url?: string;
  displayname?: string;
}

/**
 * Response from GET `/_matrix/client/r0/profile/{userId}/avatar_url`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0profileuseridavatar_url
 */
export interface GetAvatarUrlResponse {
  avatar_url?: string;
}

/**
 * Response from GET `/_matrix/client/r0/profile/{userId}/displayname`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0profileuseriddisplayname
 */
export interface GetDisplayNameResponse {
  displayname?: string;
}
