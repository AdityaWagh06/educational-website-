// src/appwriteService.js
import { account, ID } from './appwriteConfig';

export const createAccount = async (email, password, name) => {
  try {
    const res = await account.create(ID.unique(), email, password, name);
    return res;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const res = await account.createEmailPasswordSession(email, password);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await account.get();
    return res;
  } catch (error) {
    return null;
  }
};

export const logout = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    throw error;
  }
};
