import axios from 'axios';

// Base URL of your backend (make sure this matches your backend URL)
const API_URL = 'http://localhost:5000';

// Function for user signup
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, {
      username, // Added username
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

// Function for user login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
