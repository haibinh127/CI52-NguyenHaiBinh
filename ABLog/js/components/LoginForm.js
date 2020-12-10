import { checkInputWrapperValue, makeAuth, getDataFromDoc } from "../ultils.js";
import { validateEmail } from "../ultils.js";
import { md5 } from "../ultils.js";

const $template = document.getElementById('login-form-template');

class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$LoginForm = this.shadowRoot.getElementById('login-form');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
    }

    connectedCallback() {
        this.$LoginForm.onsubmit = async (event) => {
            event.preventDefault();

            let email = this.$email.value;
            let password = this.$password.value;

            let isPassed = checkInputWrapperValue(this.$email, function(value){
                return value =="";
            }, "Nhập vào email") & checkInputWrapperValue(this.$email, function (value) {
                return !validateEmail(value);
            }, "Nhập vào email")&checkInputWrapperValue(this.$password, function (value) {
                return value == "";
            }, "Nhập vào mật khẩu");

            if(isPassed){
                
                let result = await firebase
                    .firestore()
                    .collection('users')
                    .where('email', '==', email)
                    .where('password', '==', md5(password))
                    .get();
                if(result.empty){
                    alert("Email hoặc mật khẩu không chính xác ")
                } else {
                    makeAuth(getDataFromDoc(result.docs[0], ['password']));
                    router.navigate("/index");
                    console.log(getDataFromDoc(result.docs[0], ['password']));
                }    
            }
        }
    }

}
window.customElements.define('login-form', LoginForm)