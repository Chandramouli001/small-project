var arr = [];
var carr = [];
var ip = document.getElementById("ip");
var sub = document.getElementById("sub");
var find = document.getElementById("find");
var print = document.getElementById("h1");
var rst = document.getElementById("rst");
var ul = document.querySelector("ol");
var tg = document.getElementById("toggle");
var ran = 0;
var value;

sub.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = ip.value;

    let del = document.createElement("button");
    del.innerHTML = `<i class="fa fa-trash"></i>`;
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    event.preventDefault();
    arr.push(ip.value);
    carr.push(ip.value);
    ip.value = "";
});

function random() {
    var len = arr.length;
    if (len === 0) {
        value = "No more tasks remaining.";
        rstbtn();
        console.log(value);
        return;
    }
    ran = Math.floor(Math.random() * len);
    var task = arr.splice(ran, 1)[0];
    value = task;
    console.log("Random task:", value);
    console.log("og arr : ", arr, "dp arr :", carr);
}

function findFunction() {
    random();
    console.log("Remaining tasks:", arr);
    print.innerText = value;
    let listItem = ul.children[ran];
    listItem.remove();
}
find.addEventListener("click", function (event) {
    findFunction()
})
document.addEventListener("keydown", function (event) {
    if (event.shiftKey) {
        findFunction();
    }
});

function rstbtn() {
    rst.style.display = "block";
    rst.addEventListener("click", function () {
        console.log("working");
        arr = [...carr];
        rst.style.display = "none";
        print.innerText = "find again !";
    });
}

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        let index = Array.from(listItem.parentNode.children).indexOf(listItem);
        arr.splice(index, 1);
        listItem.remove();
    }
});

tg.addEventListener("click", function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
})
