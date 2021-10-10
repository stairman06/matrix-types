import { MatrixStateEvent } from '../../events';
import { SyncRoomEvent } from '../sync';

/**
 * Query parameters for GET `/_matrix/client/r0/rooms/{roomId}/messages`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0roomsroomidmessages
 */
export interface RoomPaginationQuery {
  dir: 'b' | 'f';
  filter?: string;
  from: string;
  limit?: number;
  to?: string;
}

/**
 * Rseponse from GET `/_matrix/client/r0/rooms/{roomId}/messages`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0roomsroomidmessages
 */
export interface RoomPaginationResponse {
  chunk: SyncRoomEvent[];
  end?: string;
  start: string;
  state?: MatrixStateEvent[];
}

/**
 * Response from PUT `/_matrix/client/r0/rooms/{roomId}/send/{eventType}/{txnId}`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#put_matrixclientr0roomsroomidsendeventtypetxnid
 */
export interface SendEventResponse {
  event_id: string;
}
