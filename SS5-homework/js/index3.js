const $template = document.getElementById('anime-container-template');
// tạo shadow-dom
class index3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    };
    // xét những thuộc tính có ảnh hưởng đến nội dung
    static get observedAttributes() {
        return ['name', 'image', 'category', 'price', 'chapters']
    };
    //được gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, newValue);
        if (attrName == 'name') {
            this.shadowRoot.querySelector('.anime-name').innerHTML = newValue;
        } else if (attrName == 'category') {
            this.shadowRoot.querySelector('.anime-category').innerHTML = newValue;
        } else if (attrName == 'image') {
            this.shadowRoot.querySelector('.anime-photo').src = newValue;
        } else if (attrName == 'price') {
            this.shadowRoot.querySelector('.anime-price').innerHTML = newValue;
        } else if (attrName == 'chapters') {
            this.shadowRoot.querySelector('.anime-chapters').innerHTML = newValue;
        }
    };
};
// tạo custom-element
window.customElements.define('anime-container', index3);