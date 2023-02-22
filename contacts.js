const nanoid = require("nanoid").nanoid;

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const useContacts = async function () {
  let data = await fs.readFile(contactsPath, "utf8");

  const result = JSON.parse(data);
  return result;
};

async function listContacts() {
  const result = await useContacts();
  console.table(result);
}

async function getContactById(contactId) {
  const data = await useContacts();
  const result = data.filter((data) => data.id === contactId);
  console.table(result);
}

async function removeContact(contactId) {
  const data = await useContacts();
  const result = data.filter((data) => data.id !== contactId);
  const newList = JSON.stringify(result);

  try {
    await fs.writeFile(contactsPath, newList, { encoding: "utf8", flag: "w" });
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  const data = await useContacts();
  data.push({ id: nanoid(), name, email, phone });

  const newList = JSON.stringify(result);

  try {
    await fs.writeFile(contactsPath, newList, { encoding: "utf8", flag: "w" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
