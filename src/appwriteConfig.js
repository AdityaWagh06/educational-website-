// src/appwriteConfig.js
import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // ✅ Cloud URL or your custom domain
  .setProject('68054d42000c5ea2dc3e');              // ❗ Replace this with your actual Project ID

export const account = new Account(client);
export { ID }; // if using in SignUp
