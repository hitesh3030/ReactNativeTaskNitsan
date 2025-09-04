// Success Response Type
export interface SuccessResponse<T = any> {
  status: boolean;
  available: boolean;
  message: string;
  data?: T; // Optional, as not all success responses will have data
  count?: number;
  total?: number;
  page?: number;
  pageNumber?: number;
  size?: number;
  per_page?: number;
  total_pages: number;
  formDetail?: object | any[];
  anuualExist?: boolean;
}

// Error Response Type
export interface ErrorResponse {
  status: boolean;
  message: string;
  userList?: any;
  data?: any; // Optional, could be error details or other useful information
}
