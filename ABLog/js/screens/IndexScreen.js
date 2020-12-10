import { getDataFromDoc, getDataFromDocs } from "../ultils.js";
const $template = document.getElementById('index-screen');
class IndexScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$articleList = this.shadowRoot.getElementById('article-list');
    }
    async connectedCallback() {
        await this.loadArticles();
        this.render();
    }

    async loadArticles() {
        let result = await firebase.firestore().collection('articles').get();
        this.articlesData = getDataFromDocs(result.docs);
        for (let articleData of this.articlesData) {
            // lấy dữ liệu của từng người dùng
            let result = await firebase.firestore().collection('users').doc(articleData.owner).get();
            let user = getDataFromDoc(result);
            articleData.owner = user.name;
        }
    }

    render() {
        this.$storyList.setAttribute('articles', JSON.stringify(this.articlesData));
    }
}
window.customElements.define('index-screen', IndexScreen);