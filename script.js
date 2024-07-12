//---Background Animation---
function lines(){
    let sizeW=Math.random()*8;
    let dots =document.createElement("div");
    dots.setAttribute('class','circle');
    dots.style.width=2+sizeW+'px';
    dots.style.left=Math.random() * +innerWidth+'px';
    dots.style.animationDuration=2 + Math.random()*3 + 's'
    document.body.appendChild(dots);
    setTimeout(function() {
        document.body.removeChild(dots)
    }, 5000);

}

setInterval(function () {
    lines()
}, 400);
  

//---Time of Clock---

let hrs=document.querySelector("#hours");
//console.dir(hrs);
let min=document.querySelector("#minutes");
let sec=document.querySelector("#seconds");
// console.dir(min);
// console.dir(sec);

//console.log(currentTime.getHours());
setInterval(
    function(){
        let currentTime= new Date();
        hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
        min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
        sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
    }
    ,1000
)


