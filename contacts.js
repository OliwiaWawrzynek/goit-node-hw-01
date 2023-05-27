const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  const contacts = JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
  console.table(contacts);
  return contacts;
}

function getContactById(contactId) {
  const contacts = listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact;
}

function removeContact(contactId) {
  const contacts = listContacts();
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  fs.writeFileSync(contactsPath, JSON.stringify(filteredContacts, null, 2));
  return filteredContacts;
}

function addContact(name, email, phone) {
  const contacts = listContacts();
  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
