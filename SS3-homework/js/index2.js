class Document {
    id;
    name;
    author;
    price;
    publishDate;
    constructor(id, name, author, price, publishDate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    };
    get info() {
        return `
        Id của Document là: ${this.id}.
        Tên của Document là: ${this.name}.
        Tác giả của Document là: ${this.author}.
        Giá của Document là: ${this.price}.
        Ngày xuất bản của Document là: ${this.publishDate}.
        `
    };
    // set info(data) {
    //     let data = {
    //         id: this.id,
    //         name: this.name,
    //         author: this.author,
    //         price: this.price,
    //         publishDate: this.publishDate,
    //     }
    // };
};
class Ebook extends Document {
    discount;
    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate);
        this.discount = discount;
        this.price = price - ((price / 100) * discount);
    };
    get info() {
        return `
        Id của Ebook là: ${this.id}.
        Tên của Ebook là: ${this.name} .
        Tác giả của Ebook là: ${this.author}.
        Phần trăm được giảm giá là : ${this.discount}%.
        Giá của Ebook là: ${this.price}.
        Xuất bản ngày: ${this.publishDate}.
        `
    };
};
class HardCopy extends Document {
    source;
    constructor(id, name, author, price, publishDate, source) {
        super(id, name, author, price, publishDate);
        this.source = source;
    }
    get info() {
        return `
        Tên của quyển sách được sao chép là: ${this.source}
        Id của HardCopy là: ${this.id}.
        Tên của HardCopy là: ${this.name}-Hardcopy.
        Giá của HardCopy là: ${this.price}.
        Xuất bản ngày: ${this.publishDate}.
        `
    };
};
class DocumentCase {
    id;
    name;
    documents = [];
    owner;
    dateModified;
    constructor(id, name, documents, owner, dateModified) {
        this.id = id;
        this.name = name;
        this.documents = documents;
        this.owner = owner;
        this.dateModified = dateModified;
    }
    addDocument(document) { };
    //Tham số document truyền vào là thể hiện của Document.
    // Hỏi: liệu có truyền thể hiện của EBook hoặc HardCopy được không? Vì sao?
    findDocument(name) { };
    deleteDocument(id) { };
    showDocument() { };
    updateDocument(id, data) { };
};
let Ebook1 = new Ebook("123A", "Cafe Tony", "NHB", 20000, "12/07/2000", 10);
console.log(Ebook1.info);
console.log(Ebook1);
let Ebook2 = new Ebook("123B", "Diary of the wimpy kid", "J.K Rowling", 500000, "13/11/20000", 15);
console.log(Ebook2.info);
console.log(Ebook2);
let HardCopy1 = new HardCopy("10C", "Terminator1", "Michael Bay", 5000000, "30/10/2008", "Terminator");
let HardCopy2 = new HardCopy("10D", "Terminator2", "Michael Bay", 10000000, "30/10/2016", "Terminator");
console.log(HardCopy1.info);
console.log(HardCopy1);
console.log(HardCopy2.info);
console.log(HardCopy2);
let documents = ["Book1", "Book2", "Book3", "Book 4", "Book5"];
let DocumentCase1 = new DocumentCase("PJ1", "PJ1-project", documents, "NHB", "02/02/2000");
console.log(DocumentCase1);
