import Contacts from "./Contacts.js";
export default class ContactsManagement {
    contacts = [];
    constructor(contacts) {
        this.contacts = [];
    };
    addContact(contact) {
        if (contact instanceof Contacts) {
            this.contacts.push(contact);
        };
    };
    deleteContact(id) {
        let foundIndex = this.contacts.findIndex(function (contact) {
            return contact.id == id;
        });
        if (foundIndex >= 0) {
            this.documents.splice(contact, 1);
        };
    };
    updateContact(id, data) {
        let found = this.contacts.find(function (contact) {
            return contact.id == id;
        });
        if (found != null) {
            found.info = data;
        };
    };
    findContact(name) {
        let result = this.contacts.filter(function (contact) {
            return contact.name == name;
        });
        return result;
    };
    showContact() {
        for (i = 0; i <= this.contacts.length; i++) {
            console.log(`${i + 1}.${this.contacts[i].name}-Sđt: ${this.contacts[i].number}`);
        };
    };
};