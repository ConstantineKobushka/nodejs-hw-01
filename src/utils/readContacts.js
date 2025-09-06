import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsData);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};
