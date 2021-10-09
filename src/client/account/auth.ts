import { WellKnownResponse } from '../discovery';
import { ThreePidMedium } from './threepid';

/**
 * Response from GET `/_matrix/client/r0/login`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0login
 */
export interface GetLoginFlowsResponse {
  flows?: LoginFlow[];
}

type LoginType =
  | 'm.login.password'
  | 'm.login.recaptcha'
  | 'm.login.sso'
  | 'm.login.email.identity'
  | 'm.login.msisdn'
  | 'm.login.dummy';

export interface LoginFlow {
  type?: LoginType;
}

interface BaseLogin {
  /** @deprecated use `identifier` */
  address?: string;
  /** @deprecated use `identifier` */
  medium?: 'email';
  /** @deprecated use `identifier` */
  user?: string;

  identifier?: LoginIdentifier;

  initial_device_display_name?: string;
  device_id?: string;
}

interface PasswordLogin extends BaseLogin {
  type: 'm.login.password';
  password: string;
}

interface TokenLogin extends BaseLogin {
  type: 'm.login.token';
  token: string;
}

/**
 * Request body for POST `/_matrix/client/r0/login`.
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0login
 */
export type LoginRequest = PasswordLogin | TokenLogin;

interface UserIdentifier {
  type: 'm.id.user';
  user: string;
}

interface ThreePidIdentifier {
  type: 'm.id.thirdparty';
  medium: ThreePidMedium;
  address: string;
}

interface PhoneIdentifier {
  type: 'm.id.phone';
  country: string;
  phone: string;
}

export type LoginIdentifier =
  | UserIdentifier
  | ThreePidIdentifier
  | PhoneIdentifier;

export interface LoginResponse {
  /** @deprecated extract server name from `user_id` */
  home_server?: string;

  access_token?: string;
  device_id?: string;
  user_id?: string;
  well_known?: WellKnownResponse;
}
