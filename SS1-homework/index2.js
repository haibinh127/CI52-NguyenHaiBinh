let arr = prompt("Hay nhap mot day so").split(",");
let x = prompt("Hay nhap so x")
arr = arr.map(Number);
console.log(arr);
let s = 0;
for (var i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length && j !== i; j++) {
        if (arr[i] + arr[j] == x) {
            console.log(`(${arr[j]},${arr[i]})`)
        }
    }
};