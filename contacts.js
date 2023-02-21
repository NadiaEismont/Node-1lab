const nanoid = require("nanoid").nanoid;

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((result) => console.table(result));
}

async function getContactById(contactId) {
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      return data.filter((data) => data.id === contactId);
    })
    .then((result) => console.table(result));
}

async function removeContact(contactId) {
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      return data.filter((data) => data.id !== contactId);
    })
    .then((result) => JSON.stringify(result))
    .then((data) => {
      fs.writeFile(contactsPath, data, { encoding: "utf8", flag: "w" }).catch(
        console.error
      );
    });
}

async function addContact(name, email, phone) {
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      data.push({ id: nanoid(), name, email, phone });
      return data;
    })
    .then((result) => JSON.stringify(result))
    .then((data) => {
      fs.writeFile(contactsPath, data, { encoding: "utf8", flag: "w" }).catch(
        console.error
      );
    });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
