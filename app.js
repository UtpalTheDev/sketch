var cont=document.querySelector("#container");
var clean=document.querySelector("#clean");
var range=document.querySelector("#range");

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
        item.addEventListener('mouseover',colorset);
        item.style.transition=`all 0.3s`;
        console.log(item);
    });
}

function colorset(){
    this.style.backgroundColor=`black`;
    this.style.transitionDelay=`0.1s`;
}
function erase(){
    var eachdiv=cont.querySelectorAll('div');
    eachdiv.forEach((item)=>{
      item.remove();
    });

}
function sizechange(){
    erase();
    grid(range.value);
}