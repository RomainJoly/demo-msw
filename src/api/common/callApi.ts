import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method, ResponseType } from 'axios';

const requestBuilder = ({
  method,
  url,
  data,
  contentType = 'application/ld+json',
  responseType = 'json',
  acceptLanguage,
  abortController,
}: {
  method: Method;
  url: string;
  data?: Record<string, unknown> | string;
  contentType?: string;
  responseType?: ResponseType;
  acceptLanguage?: string;
  abortController?: AbortController;
}): AxiosRequestConfig => {
  return {
    ...(data && { data }),
    headers: {
      'Accept-Language': acceptLanguage || '',
      'Content-Type': contentType,
    },
    method,
    responseType,
    url,
    ...(abortController && { signal: abortController.signal }),
  };
};

export const putRequestBuilder = ({
  url,
  data,
  acceptLanguage,
  contentType,
}: {
  url: string;
  data: Record<string, unknown> | string;
  acceptLanguage?: string;
  contentType?: string;
}): AxiosRequestConfig => requestBuilder({ method: 'PUT', url, data, acceptLanguage, contentType });

export const postRequestBuilder = ({
  url,
  data,
  acceptLanguage,
  contentType,
}: {
  url: string;
  data: Record<string, unknown> | string;
  acceptLanguage?: string;
  contentType?: string;
}): AxiosRequestConfig =>
  requestBuilder({ method: 'POST', url, data, acceptLanguage, contentType });

export const getRequestBuilder = ({
  url,
  contentType,
  responseType,
  acceptLanguage,
  abortController,
}: {
  url: string;
  contentType?: string;
  responseType?: ResponseType;
  acceptLanguage?: string;
  abortController?: AbortController;
}): AxiosRequestConfig =>
  requestBuilder({
    method: 'GET',
    url,
    acceptLanguage,
    contentType,
    responseType,
    abortController,
  });

export const deleteRequestBuilder = ({ url }: { url: string }): AxiosRequestConfig =>
  requestBuilder({ method: 'DELETE', url });

// Get subdata from data
export const getJsonData = <T>(data: T): T => {
  if (typeof data === 'string') return JSON.parse(data) as T;
  return data;
};
export const getErrorResponse = (error: AxiosError) => error?.response;

type ProcessCallCallbackResolveType<T> = AxiosResponse<T> | T | T[];

type ProcessCallCallbackType<T> = (res: AxiosResponse<T>) => ProcessCallCallbackResolveType<T>;

export const processCall = <T>(
  request: AxiosRequestConfig<T>,
  responseFunction: ProcessCallCallbackType<T> = (r) => r,
  errorFunction = (error: unknown) => {
    return Promise.reject(error);
  }
) => {
  return axios(request).then(responseFunction).catch(errorFunction) as Promise<AxiosResponse<T>>;
};
