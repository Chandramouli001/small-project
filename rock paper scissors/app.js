
// var uin, ip, rp, rs;
// var hcount=0,rcount=0,ti=0;


// var rock = document.getElementById("ro");
// var paper = document.getElementById("pa");
// var scissors = document.getElementById("sc")
// var score = document.querySelector("div")
// var ysc = document.getElementById("ysc")
// var rsc = document.getElementById("rsc")
// var tie = document.getElementById("tie")
// var ytext = document.getElementById("ytext")
// var wtext =document.getElementById("wtext")
// var rtext =document.getElementById("rtext")

// rock.addEventListener("click", rfunc =>{
//     uin = 1;
//     logic()
// })
// paper.addEventListener("click", rfunc =>{
//     uin = 2;
//     logic()
// })
// scissors.addEventListener("click", rfunc =>{
//     uin = 3;
//     logic()
// })


// function logic (){
// if (uin == 1) {
//     ip = "rock";
// } else if (uin == 2) {
//     ip = "paper";
// } else if (uin == 3) {
//     ip = "scissors";
// }

// var rb = Math.floor(Math.random() * 3) + 1;

// if (rb == 1) {
//     rp = "rock";
// } else if (rb == 2) {
//     rp = "paper";
// } else if (rb == 3) {
//     rp = "scissors";
// }

// if ((rb == 1 && uin == 1) || (rb == 2 && uin == 2) || (rb == 3 && uin == 3)) {
//     rs = ("It's a tie!"); ti++;
// } else if ((rb == 1 && uin == 3) || (rb == 2 && uin == 1) || (rb == 3 && uin == 2)) {
//     rs = ("The robot wins!");
//     rcount++
// } else if ((uin == 1 && rb == 3) || (uin == 2 && rb == 1) || (uin == 3 && rb == 2)) {
//     rs = ("You win!");
//     hcount++
// }

// console.log(`You chose ${ip} \nthe robot chose ${rp} \n${rs}`);
// console.log(`total score : \nrobo:${rcount}\ntie:${ti}\nyou:${hcount}`)
// ysc.innerText = hcount;
// rsc.innerText = rcount;
// tie.innerText = ti;
// wtext.innerText = rs;
// ytext.innerText = ip
// rtext.innerText = rp

// }




var uin, ip, rp, rs;
var hcount = 0, rcount = 0, ti = 0;


var rock = document.getElementById("ro");
var paper = document.getElementById("pa");
var scissors = document.getElementById("sc")
var rrock = document.getElementById("rro");
var rpaper = document.getElementById("rpa");
var rscissors = document.getElementById("rscc")
var score = document.querySelector("div")
var ysc = document.getElementById("ysc")
var rsc = document.getElementById("rsc")
var tie = document.getElementById("tie")
var wtext = document.getElementById("wtext")
var color = `rgb(255,29,214)`

rock.addEventListener("click", rfunc => {
    uin = 1;
    ro.style.backgroundColor = color;
    sc.style.backgroundColor = `#3498db`;
    pa.style.backgroundColor = `#3498db`;
    logic()
})
paper.addEventListener("click", rfunc => {
    uin = 2;
    pa.style.backgroundColor = color;
    ro.style.backgroundColor = `#3498db`;
    sc.style.backgroundColor = `#3498db`;
    logic()
})
scissors.addEventListener("click", rfunc => {
    uin = 3;
    sc.style.backgroundColor = color;
    ro.style.backgroundColor = `#3498db`;
    pa.style.backgroundColor = `#3498db`;
    logic()
})


function logic() {
    if (uin == 1) {
        ip = "rock";
    } else if (uin == 2) {
        ip = "paper";
    } else if (uin == 3) {
        ip = "scissors";
    }

    var rb = Math.floor(Math.random() * 3) + 1;

    if (rb == 1) {
        rp = "rock";
        rro.style.backgroundColor = color;
        rscc.style.backgroundColor = `#D678FA`;
        rpa.style.backgroundColor = `#D678FA`;
    } else if (rb == 2) {
        rp = "paper";
        rro.style.backgroundColor = `#D678FA`;
        rscc.style.backgroundColor = color;
        rpa.style.backgroundColor = `#D678FA`;
    } else if (rb == 3) {
        rp = "scissors";
        rro.style.backgroundColor = `#D678FA`;
        rscc.style.backgroundColor = `#D678FA`;
        rpa.style.backgroundColor = color;
    }

    if ((rb == 1 && uin == 1) || (rb == 2 && uin == 2) || (rb == 3 && uin == 3)) {
        rs = ("It's a tie!"); ti++;
    } else if ((rb == 1 && uin == 3) || (rb == 2 && uin == 1) || (rb == 3 && uin == 2)) {
        rs = ("The robot wins!");
        rcount++
    } else if ((uin == 1 && rb == 3) || (uin == 2 && rb == 1) || (uin == 3 && rb == 2)) {
        rs = ("You win!");
        hcount++
    }

    console.log(`You chose ${ip} \nthe robot chose ${rp} \n${rs}`);
    console.log(`total score : \nrobo:${rcount}\ntie:${ti}\nyou:${hcount}`)
    ysc.innerText = hcount;
    rsc.innerText = rcount;
    tie.innerText = ti;
    wtext.innerText = rs;
    ytext.innerText = ip
    rtext.innerText = rp

}