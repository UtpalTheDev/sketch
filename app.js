var cont=document.querySelector("#container");
var clean=document.querySelector("#clean");
var range=document.querySelector("#range");
//var colorbtn=document.querySelector("#color");
var colorinput=document.querySelector("#colorinput");
var eraser=document.querySelector("#eraser");

var color=`black`;

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
        item.style.transition=`all 0.3s`;
        console.log(item);
    });
}

function colorpick(){
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
    color=black;
    grid(range.value);
}
function erase(){
    var eachdiv=cont.querySelectorAll('div');
    eachdiv.forEach((item)=>{
    item.style.backgroundColor=`antiquewhite`
    });
}
function colorset(event){
    color=event.target.value;
}
function eraseperdiv(){
    color=`antiquewhite`;
}