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
  });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};