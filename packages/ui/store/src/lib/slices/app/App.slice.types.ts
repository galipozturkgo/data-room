export type NetworkStatus = 'online' | 'offline';

export type NetworkErrorType =
  | 'NETWORK_ERROR'
  | 'ACCESS_ERROR'
  | 'REQUEST_ERROR'
  | 'INTERVAL_SERVER_ERROR';

export interface AppState {
  socketSyncing?: boolean;
  networkStatus: NetworkStatus;
  networkError?: NetworkErrorType;
}
