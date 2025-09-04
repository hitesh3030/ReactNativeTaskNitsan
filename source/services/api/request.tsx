import type {AxiosError, AxiosRequestConfig} from 'axios';
import axios from 'axios';
import {checkError, clearAsyncData} from '../../utils/commonFunction';
import {ErrorResponse, SuccessResponse} from '../../types';
import {printData} from '../../utils';
import {BASE_URL} from '../../constant';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async function (config) {
    config.headers['app-key'] = 'yrWN6aKdDdTeTTSwdyXw2L8UOmfc5rxP';
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  response => {
    return response; // Continue with the normal flow
  },
  async error => {
    if (error?.response?.status === 401) {
      await clearAsyncData(); // Handle unauthorized error
    }
    return Promise.reject(error); // Propagate the error
  },
);

const commonErrorResponse: ErrorResponse = {
  status: false,
  message: 'Something went wrong!',
};

export async function post<T>(
  path: string,
  body?: T,
  params?: AxiosRequestConfig<T>, // Ensure this is typed as AxiosRequestConfig<T>
): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const response = await axios.post(path, body, params); // This now works with correct type
    if (
      response?.status === 200 ||
      response?.status === 201 ||
      response?.status === 204 ||
      response?.status === 202
    ) {
      return response?.data;
    }
    // If the status is not success, handle it as an error
    return commonErrorResponse;
  } catch (err) {
    await handleApiError(err); // Reuse the common error handler
    return commonErrorResponse;
  }
}

export async function get<T>(
  path: string,
  body?: T,
  params?: AxiosRequestConfig<T>, // Ensure this is typed as AxiosRequestConfig<T>
): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const response = await axios.get(path, params);
    if (response?.status === 200) {
      return response?.data;
    }
    // If the status is not success, handle it as an error
    return commonErrorResponse;
  } catch (err) {
    await handleApiError(err); // Reuse the common error handler
    return commonErrorResponse;
  }
}

export async function put<T>(
  path: string,
  body?: T,
  params?: AxiosRequestConfig<T>, // Ensure this is typed as AxiosRequestConfig<T>
): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const response = await axios.put(path, body, params);
    if (response?.status === 200 || response?.status === 201) {
      return response?.data;
    }
    // If the status is not success, handle it as an error
    return commonErrorResponse;
  } catch (err) {
    await handleApiError(err); // Reuse the common error handler
    return commonErrorResponse;
  }
}

export async function deleteApi<T>(
  path: string,
  params?: AxiosRequestConfig<T>,
): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const response = await axios.delete(path, params);
    return response.data;
  } catch (err) {
    printData('ERROR DELETE:- ' + err);
    await handleApiError(err); // Reuse the common error handler
    return commonErrorResponse;
  }
}

export async function patch<T>(
  path: string,
  body?: T,
  params?: AxiosRequestConfig<T>, // Ensure this is typed as AxiosRequestConfig<T>
): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const response = await axios.patch(path, body, params);
    if (response?.data?.status === true) {
      return response.data;
    }
    // If the status is not success, handle it as an error
    return commonErrorResponse;
  } catch (err) {
    printData('ERROR PATCH :- ' + err);
    await handleApiError(err); // Reuse the common error handler
    return commonErrorResponse;
  }
}

interface ErrorResponseData {
  message: string;
  [key: string]: any; // If there are other fields
}

export const handleApiError = async (err: unknown): Promise<never> => {
  const axiosError = err as AxiosError<ErrorResponseData>;
  console.log('ERROR in API call', axiosError?.response?.status);

  if (!axiosError?.response) {
    throw new Error(
      'No response from server. Please check your internet connection.',
    );
  } else {
    const errorMessage =
      axiosError?.response?.data?.message || 'An error occurred';
    checkError(axiosError?.response?.status, errorMessage);
    console.log(axiosError?.response);

    // Throw the error message for further handling
    throw new Error(errorMessage);
  }
};
