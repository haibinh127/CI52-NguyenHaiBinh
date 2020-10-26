let arr = prompt("nhap mang").split(",");
arr = arr.map(x => Number(x));
for (let i = 0; i < arr.length; i++) {
    let check = false;
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]){
            check = true;
            arr.splice(j,1);
            j--;
        }
    }
    if(check){
        arr.splice(i,1);
        i--;
    }   
}
console.log(arr);