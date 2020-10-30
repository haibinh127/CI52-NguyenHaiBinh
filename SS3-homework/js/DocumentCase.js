import Document from "./Document.js"
export default class DocumentCase {
    id;
    name;
    documents = [];
    owner;
    dateModified;
    constructor(name, owner) {
        this.id = uuid.v4();
        this.name = name;
        this.documents = [];
        this.owner = owner;
        this.dateModified = new Date().toISOString();
    }
    addDocument(document) {
        if (document instanceof Document) {
            this.documents.push(document);
        } else {
            console.log("Truyền linh tinh");
        }
    };
    //for each break được còn for of ko break được
    findDocument(name) {
        //cách 1
        // let result = [];
        // for (let document of this.documents) {
        //     if (document.name == name) {
        //         result.push(document);
        //     };
        // }
        //cách 2
        let result = this.documents.filter(function (document) {
            return document.name == name;
        })
        return result;
    };
    deleteDocument(id) {
        //cach1
        // let foundIndex = -1;
        // for (let i = 0; i < this.documents.length; i++) {
        //     if (this.documents[i].id == id) {
        //         foundIndex = i
        //     }
        // }
        //cach2
        let foundIndex = this.documents.findIndex(function (document) {
            return document.id == id;
        });
        if (foundIndex >= 0) {
            this.documents.splice(foundIndex, 1)
        };
    };
    showDocument() {
        this.documents.forEach(function (document) {
            console.log(document.info);
        });
    };
    updateDocument(id, data) {
        let found = this.documents.find(function (document) {
            return document.id == id;
        });
        if (found != null) {
            found.info = data;
        }
    };
};