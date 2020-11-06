let str = prompt("Hãy nhập vào một chuỗi kí viết liền từ bàn phím");
let letters = str.split("");
let count_letters = {};
for (let i = 0; i < letters.length; i++) {
    if (count_letters[letters[i]] == undefined)
        count_letters[letters[i]] = 0;
    count_letters[letters[i]]++;
};
for (let i in count_letters) {
    console.log(`(${i}, ${count_letters[i]})`);
};
