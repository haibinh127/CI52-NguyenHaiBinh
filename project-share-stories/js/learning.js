//CRUD
//create: tạo document
console.log(firebase);
function addData() {
    firebase.firestore().collection('users').add({
        email: "binh127@gmail.com",
        password: "12345678"
    });
};
//read
function readAllData(){
    let data = firebase.firestore().collection('users').get();
    console.log(data);
};
readAllData();