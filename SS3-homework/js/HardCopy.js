import Document from "./Document.js";
export default class HardCopy extends Document {
    source;
    constructor(name, author, price, publishDate, source) {
        super(name, author, price, publishDate);
        this.source = source;
    }
    get info() {
        return `
        Tên của quyển sách được sao chép là: ${this.source}
        Id của HardCopy là: ${this.id}.
        Tên của HardCopy là: ${this.name}-Hardcopy.
        Giá của HardCopy là: ${this.price}.
        Xuất bản ngày: ${this.publishDate}.
        `;
    };
};