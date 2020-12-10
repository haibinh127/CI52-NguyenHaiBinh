const $template = document.getElementById('article-list-template')
class ArticleList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$articleList = this.shadowRoot.getElementById('article-list');
    }
    static get observedAttributes() {
        return ["articles"];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'articles') {
            this.render();
        }   
    }
    render() {
        let articles = JSON.parse(this.getAttribute("articles"));//getAttribute -> tra ve chuoi
        articles.forEach((article) => {
            let $article = document.createElement('article-container');
            $article.setAttribute('id', article.id);
            $article.setAttribute('content', article.content);
            $article.setAttribute('owner', article.owner);
            $article.setAttribute('date-modified', article.dateModified);

            this.$articleList.appendChild($article);
        })
    }
}
window.customElements.define('article-list', ArticleList);
