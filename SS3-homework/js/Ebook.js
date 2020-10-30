import Document from "./Document.js";
export default class Ebook extends Document {
    discount;
    constructor(name, author, price, publishDate, discount) {
        super(name, author, price, publishDate);
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
        `;
    };
}