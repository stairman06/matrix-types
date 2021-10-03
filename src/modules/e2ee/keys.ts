import { Signatures } from '../../events';
import { EncryptionAlgorithm, MatrixEncryptionAlgorithm } from '../crypto';

export type WithheldCode =
  | 'm.blacklisted'
  | 'm.unverified'
  | 'm.unauthorised'
  | 'm.unavailable'
  | 'm.no_olm';

/**
 * Query parameters for GET `/_matrix/client/r0/keys/changes`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0keyschanges
 */
export interface GetChangedKeysQuery {
  from: string;
  to: string;
}

/**
 * Response from GET `/_matrix/client/r0/keys/changes`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0keyschanges
 */
export interface GetChangedKeysResponse {
  changed?: string[];
  left?: string[];
}

/**
 * Request body for POST `/_matrix/client/r0/keys/claim`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0keysclaim
 */
export interface ClaimKeysRequest {
  one_time_keys: {
    [user: string]: {
      [device: string]: EncryptionAlgorithm;
    };
  };
  timeout?: number;
}

/**
 * Response from POST `/_matrix/client/r0/keys/claim`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0keysclaim
 */
export interface ClaimKeysResponse {
  // TODO what is this supposed to look like?
  failures?: any;
  // TODO bad structure?
  one_time_keys: {
    [user: string]: {
      [device: string]: {
        [alg in EncryptionAlgorithm]: {
          key: string;
          signatures: Signatures;
        };
      };
    };
  };
}

/**
 * Request body for POST `/_matrix/client/r0/keys/query`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0keysquery
 */
export interface QueryKeysRequest {
  device_keys: Record<string, string>;
  timeout?: number;
  token?: string;
}

interface Keys {
  [key: string]: string;
}

interface CrossSigningKey {
  keys: Keys;
  signatures?: Signatures;
  usage: string[];
  user_id: string;
}

interface DeviceKey {
  algorithms: MatrixEncryptionAlgorithm[];
  device_id: string;
  keys: Keys;
  signatures: Signatures;
  user_id: string;
}

/**
 * Response from POST `/_matrix/client/r0/keys/query`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0keysquery
 */
export interface QueryKeysResponse {
  failures?: any;
  device_keys: {
    [user: string]: {
      [device: string]: DeviceKey & {
        unsigned?: {
          device_display_name?: string;
        };
      };
    };
  };
  master_keys: Record<string, CrossSigningKey>;
  self_signing_keys: Record<string, CrossSigningKey>;
  user_signing_keys: Record<string, CrossSigningKey>;
}

/**
 * Request body for POST `/_matrix/client/r0/keys/upload`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0keysupload
 */
export interface UploadKeysRequest {
  device_keys?: DeviceKey;
  one_time_keys?: {
    [key: string]:
      | string
      | {
          key: string;
          signatures: Signatures;
        };
  };
}

/**
 * Response from POST `/_matrix/client/r0/keys/upload`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0keysupload
 */
export type UploadKeysResponse = {
  one_time_key_counts: {
    [alg in EncryptionAlgorithm]?: number;
  };
};
