const contacts = require("./contacts");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = contacts.listContacts();
      console.log("All contacts:", allContacts);
      break;

    case "get":
      const contactById = contacts.getContactById(id);
      console.log("Contact by ID:", contactById);
      break;

    case "add":
      const newContact = contacts.addContact(name, email, phone);
      console.log("New contact:", newContact);
      break;

    case "remove":
      const remainingContacts = contacts.removeContact(id);
      console.log("Remaining contacts:", remainingContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
