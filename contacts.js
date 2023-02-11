const fs = require("fs").promises;
const { request } = require("http");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

(async function listContacts() {
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((result) => console.table(result));
})();

(async function getContactById(contactId) {
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      return JSON.parse(data);
    })
    .then((data) => {
      return data.filter((data) => data.id === contactId);
    })
    .then((result) => console.table(result));
})("6");

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

// module.exports = {
//   listContacts,
// };
