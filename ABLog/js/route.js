import {auth} from "./ultils.js";
var root = null;
var useHash = true; // Defaults to: false
// var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash);

router.on('/sign-up', function () {
    console.log("Đăng kí");
    document.getElementById("mainBody").innerHTML = "<register-form></register-form>";
}).resolve();
router.on("/sign-in", function () {
    console.log("Đăng nhập");
    document.getElementById("mainBody").innerHTML = "<login-form></login-form>";
}).resolve();
router.on('/index', function () {
    document.getElementById("mainBody").innerHTML = '<index-screen></index-screen>'
}).resolve();
// router.on('/create-story', function () {
//     document.getElementById('mainBody').innerHTML = "<create-story-screen></create-story-screen>";
// }).resolve();
// window.onload = function () {
//     if (auth()) {
//         router.navigate('/index')
//     } else {
//         router.navigate('/sign-in')
//     }
// };
window.router = router;