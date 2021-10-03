import { EventsHolder, MatrixEventBase } from '../../events';

export type Events = EventsHolder<
  | VerificationRequestEvent
  | VerificationReadyEvent
  | VerificationStartEvent
  | VerificationAcceptEvent
  | VerificationKeyEvent
  | VerificationMacEvent
>;

export type VerificationMethod = 'm.sas.v1';

export type VerificationRequestEvent = MatrixEventBase<
  'm.key.verification.request',
  VerificationRequestEventContent
>;

export interface VerificationRequestEventContent {
  from_device: string;
  methods: VerificationMethod[];
  timestamp?: number;
  transaction_id?: string;
}

export type VerificationReadyEvent = MatrixEventBase<
  'm.key.verification.ready',
  VerificationReadyEventContent
>;

interface VerificationRelatesTo {
  event_id?: string;
  rel_type?: 'm.reference';
}

export interface VerificationReadyEventContent {
  from_device: string;
  methods: VerificationMethod[];
  'm.relates_to'?: VerificationRelatesTo;
  transaction_id?: string;
}

export type VerificationStartEvent = MatrixEventBase<
  'm.key.verification.start',
  VerificationStartEventContent
>;

export interface VerificationStartBaseContent {
  from_device: string;
  method: VerificationMethod;
  'm.relates_to'?: VerificationRelatesTo;
  next_method?: VerificationMethod;
  transaction_id?: string;
}

export interface VerificationStartSasContent
  extends VerificationStartBaseContent {
  hashes: ['sha256'];
  key_agreement_protocols: ['curve25519-hkdf-sha2'];
  message_authentication_codes: ['hkdf-hmac-sha256'];
  method: 'm.sas.v1';
  short_authentication_string: ['decimal'] | ['decimal', 'emoji'];
}

export type VerificationStartEventContent = VerificationStartSasContent;

export type VerificationAcceptEvent = MatrixEventBase<
  'm.key.verification.accept',
  VerificationAcceptEventContent
>;

export interface VerificationAcceptEventContent {
  commitment: string;
  hash: string;
  key_agreement_protocol: 'curve25519-hkdf-sha2';
  'm.relates_to'?: VerificationRelatesTo;
  message_authentication_code: string;
  short_authentication_string: string;
  transaction_id?: string;
}

export type VerificationKeyEvent = MatrixEventBase<
  'm.key.verification.key',
  VerificationKeyEventContent
>;

export interface VerificationKeyEventContent {
  key: string;
  'm.relates_to'?: VerificationRelatesTo;
  transaction_id?: string;
}

export type VerificationMacEvent = MatrixEventBase<
  'm.key.verification.mac',
  VerificationMacEventContent
>;

export interface VerificationMacEventContent {
  keys: string;
  'm.relates_to'?: VerificationRelatesTo;
  mac: {
    [key: string]: string;
  };
  transaction_id?: string;
}
