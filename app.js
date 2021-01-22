var cont=document.querySelector("#container");
var clean=document.querySelector("#clean");
var range=document.querySelector("#range");
//var colorbtn=document.querySelector("#color");
var colorinput=document.querySelector("#colorinput");
var eraser=document.querySelector("#eraser");
var rainbow=document.querySelector("#rainbow");
var rainbowsetvar=0;
var color=`black`;
rainbow.addEventListener('click',rainbowsetter);
eraser.addEventListener('click',eraseperdiv);
colorinput.addEventListener('input', colorset);
//colorbtn.addEventListener('click', colorset);
range.addEventListener('input',sizechange);
clean.addEventListener('click', erase);
window.addEventListener("load",()=>{grid(16)});


function grid(size){
    var maxdiv=size*size;
    cont.style.gridTemplateColumns=`repeat(${size},1fr)`;
    cont.style.gridTemplateRows=`repeat(${size},1fr)`;
    
    for(var i=0;i<maxdiv;i++){
    var div=document.createElement("div");

    cont.appendChild(div);  

    }
    var eachdiv=cont.querySelectorAll('div');
    eachdiv.forEach((item)=>{
        item.addEventListener('mouseover',colorpick);
        item.addEventListener('touchmove',colorpick);
        item.style.transition=`all 0.3s`;
        console.log(item);
    });
}

function colorpick(){
    if(rainbowsetvar===1){
        rainbowset();
    }
    this.style.backgroundColor=`${color}`;
    this.style.transitionDelay=`0.1s`;
}
function cleandiv(){
    var eachdiv=cont.querySelectorAll('div');
    eachdiv.forEach((item)=>{
      item.remove();
    });

}
function sizechange(){
    cleandiv();
    color=`black`;
    grid(range.value);
}
function erase(){
    rainbowsetvar=0;
    var eachdiv=cont.querySelectorAll('div');
    eachdiv.forEach((item)=>{
    item.style.backgroundColor=`antiquewhite`
    });
    color=`black`;
}
function colorset(event){
    rainbowsetvar=0;
    color=event.target.value;
}
function eraseperdiv(){
    rainbowsetvar=0;
    color=`antiquewhite`;
}
function rainbowset(){
    color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}
function rainbowsetter(){
    rainbowsetvar=1;
}