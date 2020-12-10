import { auth } from '../ultils.js'

const $template = document.getElementById('article-container-template');

class ArticleContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$owner = this.shadowRoot.getElementById('owner');
        this.$dateModified = this.shadowRoot.getElementById('date-modified');
        this.$content = this.shadowRoot.getElementById('content');
    };
    //khai báo những thuộc tính có ảnh hưởng đến nội dung
    static get observedAttributes() {
        return ['id', 'owner', 'date-modified', 'content'];
    }

    connectedCallback() {
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'owner':
                this.$owner.innerHTML = newValue;
                break;
            case 'date-modified':
                this.$dateModified.innerHTML = newValue;
                break;
            case 'content':
                this.$content.innerHTML = newValue;
                break;
        }
    }
};
window.customElements.define('article-container', ArticleContainer);