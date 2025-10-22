import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  CancelTokenSource,
  InternalAxiosRequestConfig,
} from 'axios';

import { Headers } from '../header/Headers';
import { AppAxiosRequestConfig } from './HttpBase.types';

const cancelTokenSource = axios.CancelToken;

export abstract class HttpBase {
  protected http: AxiosInstance;
  private cancelTokenSources: CancelTokenSource[] = [];

  constructor(baseURL: string) {
    const options = {
      baseURL,
      withCredentials: true,
      headers: Headers.defaultHeader(),
    };

    this.http = axios.create(options);
    this.http.interceptors.request.use(this.requestConfig, this.errorHandler);
    this.http.interceptors.response.use(this.returnOnlyData, this.errorHandler);
  }

  public cancelToken = (): CancelTokenSource => {
    const source = cancelTokenSource.source();
    this.cancelTokenSources.push(source);
    return source;
  };

  public unmount = () => {
    this.cancelTokenSources.forEach((source) => {
      source.cancel();
    });
  };

  public setInterceptors = (config?: AppAxiosRequestConfig) => {
    if (config?.returnFullResponse) {
      this.http.interceptors.response.clear();
      this.http.interceptors.response.use(
        this.returnFullResponse,
        this.errorHandler,
      );
    }

    if (!config?.cancelToken) {
      this.http.interceptors.request.use(this.appendCancelToken);
    }
  };

  private requestConfig = (config: AppAxiosRequestConfig) => {
    const headers = config.headers as AxiosHeaders;
    return { ...config, headers: headers };
  };

  private returnFullResponse = (response: AxiosResponse) => {
    return response;
  };

  private returnOnlyData = (response: AxiosResponse) => {
    return response.data;
  };

  private appendCancelToken = (config: InternalAxiosRequestConfig) => {
    config.cancelToken = this.cancelToken().token;
    return config;
  };

  private errorHandler = (error: AxiosError) => {
    return Promise.reject(error);
  };
}
