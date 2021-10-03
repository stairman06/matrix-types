/**
 * Request body for POST `/_matrix/client/r0/delete_devices`
 *
 * https://spec.matrix.org/unstable/client-server-api/#post_matrixclientr0delete_devices
 */
export interface DeleteDevicesRequest {
  // TODO UIAA
  auth?: any;
  devices: string[];
}

/**
 * Response from GET `/_matrix/client/r0/devices`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0devices
 */
export interface GetDevicesResponse {
  devices?: Device[];
}

interface Device {
  device_id: string;
  display_name?: string;
  last_seen_ip?: string;
  last_seen_ts?: number;
}

/**
 * Response from GET `/_matrix/client/r0/devices/{deviceId}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#get_matrixclientr0devicesdeviceid
 */
export type GetDeviceInfoResponse = Device;

/**
 * Request body for PUT `/_matrix/client/r0/devices/{deviceId}`
 *
 * https://spec.matrix.org/unstable/client-server-api/#put_matrixclientr0devicesdeviceid
 */
export interface SetDeviceMetadataRequest {
  display_name?: string;
}
