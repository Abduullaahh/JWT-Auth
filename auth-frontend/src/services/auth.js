import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';

export const register = async (username, email, password) => {
  const response = await axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  });
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(API_URL + 'signin', {
    username,
    password,
  }, { withCredentials: true });
  return response.data;
};

export const logout = async () => {
  await axios.post(API_URL + 'logout', {}, { withCredentials: true });
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(API_URL + 'check', { withCredentials: true });
    return response.data;
  } catch (error) {
    return null;
  }
};
