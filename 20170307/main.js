/**
 * Created by Administrator on 2017/3/7.
 */
var add = document.createElement("button");
var addnot = document.createElement("button");
var num = document.createElement("button");
var a = 0;
addnot.innerHTML = "-";
document.body.appendChild(addnot);
num.innerHTML = a;
document.body.appendChild(num);
add.innerHTML = "+";
document.body.appendChild(add);
add.onclick = function () {
    a++;
    num.innerHTML = a;
};
addnot.onclick = function () {
    a--;
    num.innerHTML = a;
};
//# sourceMappingURL=main.js.map