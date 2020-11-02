pointA = prompt("Nhập tọa độ điểm A(x1,y1)").split(",");
pointB = prompt("Nhập tọa độ điểm B(x2,y2)").split(",");
pointC = prompt("Nhập tọa độ điểm C(x3,y3)").split(",");
pointA = pointA.map(Number);
pointB = pointB.map(Number);
pointC = pointC.map(Number);
console.log(pointA);
console.log(pointB);
console.log(pointC);
xAB = pointB[0] - pointA[0];
yAB = pointB[1] - pointA[1];
xAC = pointC[0] - pointA[0];
yAC = pointC[1] - pointA[1];
if ((xAB / xAC) != (yAB / yAC)) {
    alert("A,B,C không thẳng hàng");
} else {
    alert("A,B,C thẳng hàng");
}