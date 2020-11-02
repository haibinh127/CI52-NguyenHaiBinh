import ContactsManagement from "./ContactsManagement.js"
export default class Contacts {
    id;
    name;
    company;
    phone;
    email;
    constructor(name, company, phone, email) {
        this.id = uuid.v4();
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.email = email;
    };
    set info(data) {
        this.name = data.name;
        this.company = data.company;
        this.phone = data.phone;
        this.email = data.email;
    };
};
