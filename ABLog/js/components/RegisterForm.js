import { checkInputWrapperValue, md5, validateStrongPassword } from "../ultils.js";
import { validateEmail } from "../ultils.js";
const $template = document.getElementById('register-form-template');

class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$registerForm = this.shadowRoot.getElementById('register-form');
        this.$name = this.shadowRoot.getElementById('name');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
        this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation');
    };
    
    connectedCallback() {
        this.$registerForm.onsubmit = async (event) => {
            event.preventDefault();

            let name = this.$name.value;
            let email = this.$email.value;
            let password = this.$password.value;
            let $passwordConfirmation = this.$passwordConfirmation.value;

            let isPassed = checkInputWrapperValue(this.$name, function (value) {
                // if(value.trim() === '') return false;
                return value == "";
            }, "Nhập vào tên") & checkInputWrapperValue(this.$email, function (value) {
                return value == "" || !validateEmail(value);
            }, "Email không hợp lệ") & checkInputWrapperValue(this.$password, function (value) {
                return value == "" || !validateStrongPassword(value);
            }, "Mật khẩu không hợp lệ") & checkInputWrapperValue(this.$passwordConfirmation, function (value) {
                return value == "" || value != password;
            }, "Xác nhận mật khẩu không hợp lệ");

            if (isPassed) {
                let result = await firebase.firestore().collection('user').where('email', '==', email).get();
                if (result.empty) {
                    await firebase.firestore().collection('users').add({
                        name: name,
                        email: email,
                        password: md5(password)
                    });
                    alert("Đăng kí tài khoản thành công");
                } else {
                    alert("Email" + email + "đã có người sử dụng !")
                };
            };
        };
    };
};
window.customElements.define('register-form', RegisterForm);