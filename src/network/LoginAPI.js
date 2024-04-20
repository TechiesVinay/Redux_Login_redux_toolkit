import axios from 'axios';
import {
  API_RESPONSE_AUTHENTICATION_ERROR
} from '../utils/constants/apiCodes';
import { BASE_SERVER_URL, LOGIN_URL } from '../utils/constants/apiEndpoints';

export const loginAPI = async userData => {
  try {
    const response = await axios.post(`${BASE_SERVER_URL}/${LOGIN_URL}`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with an error status code
      const { status, data } = error.response;
      if (status === API_RESPONSE_AUTHENTICATION_ERROR) {
        // Handle authentication error (e.g., incorrect username or password)
        return { error: data.message };
      } else {
        // Handle other server errors
        return { error: 'Server error. Please try again later.' };
      }
    } else if (error.request) {
      // The request was made but no response was received
      return { error: 'No response received from server' };
    } else {
      // Something happened in setting up the request that triggered an error
      return { error: 'Error in making the request' };
    }
  }
};
