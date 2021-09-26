/**
 * Errors returned from Matrix APIs.
 *
 * https://spec.matrix.org/unstable/client-server-api/#standard-error-response
 */
export interface MatrixError {
  errcode: MatrixErrorCode;
  error: string;
}

export type MatrixErrorCode =
  | 'M_FORBIDDEN'
  | 'M_NOT_FOUND'
  | 'M_LIMIT_EXCEEDED'
  | 'M_UNKNOWN_TOKEN'
  | 'M_MISSING_TOKEN'
  | 'M_BAD_JSON'
  | 'M_NOT_JSON'
  | 'M_UNKNOWN';
