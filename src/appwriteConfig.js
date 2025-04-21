import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Keep this if you're using Appwrite Cloud
  .setProject('68054d42000c5ea2dc3e'); // <-- 🔁 Replace this with your actual Project ID

const account = new Account(client);

export { client, account, ID };
