/**
 * Matrix encrypted file type, used in message events
 */
export interface EncryptedFile {
  url: string;
  key: JWK;
  iv: string;
  hashes: {
    sha256: string;
    [hash: string]: string;
  };
  v: 'v2';
}

/**
 * Matrix-compatible JSON Web Key type
 * See https://spec.matrix.org/unstable/client-server-api/#sending-encrypted-attachments
 * for more information
 *
 * Note that a custom JWT is used instead of {@link JsonWebKey}, because
 * that has extra optional fields that don't comply with the Matrix spec.
 */
export interface JWK {
  kty: 'oct';
  key_ops: ['encrypt', 'decrypt'] | ['decrypt', 'encrypt'];
  alg: 'A256CTR';
  k: string;
  ext: true;
}
