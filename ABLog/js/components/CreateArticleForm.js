import {auth} from "../ultils.js"

const $template = document.getElementById('create-article-form-template');

class CreateArticleForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$content = this.shadowRoot.getElementById('content');
        this.$createArticleForm = this.shadowRoot.getElementById('create-article-form');
    };
    connectedCallback() {
        ClassicEditor.create(this.$content);

        this.$createArticleForm.onsubmit = async (event) => {
            event.preventDefault();
            let currentUser = auth();
            if (!currentUser) return;
            await firebase.firestore().collection('articles').add({
                content: this.$content.value,
                dateModified: new Date().toISOString(),
                owner: currentUser.id
            });
            router.navigate(`/index`);
        }
    }
};
window.customElements.define('create-article-form', CreateArticleForm);