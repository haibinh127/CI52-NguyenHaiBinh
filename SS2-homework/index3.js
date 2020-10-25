let arr = prompt("Hay nhap mot day so").split(",");
arr = arr.map(Number);
let s = 0;
for (var i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length && j !== i; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(i, 1) && arr.splice(j, 1);
        }
    }
};
alert(arr);