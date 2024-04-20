// src/api/api.js
import axios from 'axios';

export const signupAPI = async userData => {
  try {
     console.log(userData)
    const response = await axios.post('http://localhost:8080/api/user/signup', userData);
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};




