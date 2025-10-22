import { AxiosResponse } from 'axios';

import { HttpBase } from '../base/HttpBase';
import { AppAxiosRequestConfig } from '../base/HttpBase.types';

export class HttpClient extends HttpBase {
  public async get<T = AxiosResponse>(
    url: string,
    config?: AppAxiosRequestConfig,
  ): Promise<T> {
    this.setInterceptors(config);
    return this.http.get(url, config);
  }

  public async post<D, T = AxiosResponse>(
    url: string,
    data?: D,
    config?: AppAxiosRequestConfig,
  ): Promise<T> {
    this.setInterceptors(config);
    return this.http.post(url, data, config);
  }

  public async put<D, T = AxiosResponse>(
    url: string,
    data?: D,
    config?: AppAxiosRequestConfig,
  ): Promise<T> {
    this.setInterceptors(config);
    return this.http.put(url, data, config);
  }

  public async delete<T = AxiosResponse>(
    url: string,
    config?: AppAxiosRequestConfig,
  ): Promise<T> {
    this.setInterceptors(config);
    return this.http.delete(url, config);
  }
}

export const httpClient = (baseURL: string) => new HttpClient(baseURL);
