import {BASE_URL} from '../../constant';
import {API_CONFIG} from '../../services/api/apiUrl';
import {post} from '../../services/api/request';

export const loggedIn = async (data: FormData): Promise<any> => {
  try {
    const params = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await post(BASE_URL + API_CONFIG.LOGIN, data, params);
    return response;
  } catch (err) {
    console.error('ERROR Login User :', err);
    // Optionally rethrow the error if you want to handle it further upstream
    throw err;
  }
};

export const registerUser = async (data: FormData): Promise<any> => {
  try {
    const params = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await post(BASE_URL + API_CONFIG.REGISTER, data, params);
    return response;
  } catch (err) {
    console.error('ERROR Create User :', err);
    // Optionally rethrow the error if you want to handle it further upstream
    throw err;
  }
};
