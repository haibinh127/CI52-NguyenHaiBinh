export default class Document {
    id;
    name;
    author;
    price;
    publishDate;
    constructor(name, author, price, publishDate) {
        this.id = uuid.v4();
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
        `;
    };
    set info(data) {
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.publishDate = data.publishDate;
    };
};