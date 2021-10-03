import { MatrixEventContent } from '../events';

/**
 * Request body for PUT `/_matrix/client/r0/sendToDevice/{eventType}/{txnId}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#put_matrixclientr0sendtodeviceeventtypetxnid
 */
export interface SendToDeviceRequest {
  messages: {
    [user: string]: {
      [device: string]: MatrixEventContent;
    };
  };
}
