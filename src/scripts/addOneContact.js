import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
