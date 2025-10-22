import { AxiosRequestConfig } from 'axios';

export interface AppAxiosRequestConfig extends AxiosRequestConfig {
  returnFullResponse?: boolean;
}
