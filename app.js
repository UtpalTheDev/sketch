var cont=document.querySelector("#container");
var clean=document.querySelector("#clean");
var range=document.querySelector("#range");
//var colorbtn=document.querySelector("#color");
var colorinput=document.querySelector("#colorinput");
var eraser=document.querySelector("#eraser");
var rainbow=document.querySelector("#rainbow");
var fullscreen=document.querySelector("#fullscreen");
var edit=document.querySelector("#edit");
var grider=document.querySelector("#grid");

var rainbowsetvar=0;
var color=`black`;
var screen=0;
var editorvar=0;
var erasevar=0;
var gridvar=0;
var dblclickvar=0;

cont.addEventListener('dblclick',doubleclick);
grider.addEventListener('click',gridview);
edit.addEventListener('click', editor);
fullscreen.addEventListener('click',fullScreen);
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
        //console.log(item);
    });
}

function colorpick(){
    if(dblclickvar==0){
    if(rainbowsetvar===1){
        rainbowset();
    }
    this.style.backgroundColor=`${color}`;
    this.style.transitionDelay=`0.1s`;
   }
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
    eraser.style.transform=`scale(1)`;
    erasevar=0;
    rainbow.style.transform=`scale(1)`;

}
function colorset(event){
    rainbowsetvar=0;
    color=event.target.value;
    eraser.style.transform=`scale(1)`;
    erasevar=0;

}
function eraseperdiv(){
   
   
    if(erasevar==0){
        rainbowsetvar=0;
        color=`antiquewhite`;
        eraser.style.transform=`scale(0.9)`;
        rainbow.style.transform=`scale(1)`;

        erasevar=1;
    }
    else{
       color=`black`;    
       eraser.style.transform=`scale(1)`;
       erasevar=0;
    }
    console.log(erasevar);
}
function rainbowset(){
    color=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}
function rainbowsetter(){
    
    if(rainbowsetvar==0){
        
       
        rainbow.style.transform=`scale(0.9)`;
        eraser.style.transform=`scale(1)`;
        erasevar=0;

        rainbowsetvar=1;
    }
    else{
       color=`black`;    
       rainbow.style.transform=`scale(1)`;
       rainbowsetvar=0;
    }
    
}
function fullScreen(){
 
 if(screen===0){
    cont.style.width=`100%`;
    fullscreen.innerHTML=`Smallscreen`;
    screen=1;

 }
 else{
    cont.style.width=`50%`;
    fullscreen.innerHTML=`Fullscreen`;
    screen=0;
 }
}

function editor(){
    
    if(editorvar===0){
    edit.innerHTML=`Normal Mode`   ; 
    var eachdiv=cont.querySelectorAll('div');
    eachdiv.forEach((item)=>{
        item.removeEventListener('mouseover',colorpick);

        item.addEventListener('mousedown',colorpick);
        item.addEventListener('touchmove',colorpick);
        item.classList.add(`hovering`);
        item.style.transition=`all 0.3s`;
        //console.log(item);
    });
    editorvar=1;
    }
    else{
        edit.innerHTML=`Pixel Mode`   ; 
        var eachdiv=cont.querySelectorAll('div');
        eachdiv.forEach((item)=>{
            item.removeEventListener('mousedown',colorpick);

            item.addEventListener('mouseover',colorpick);
            item.addEventListener('touchmove',colorpick);
            item.classList.remove(`hovering`);
            item.style.transition=`all 0.3s`;
            //console.log(item);
        });
        editorvar=0;
    }

}

function gridview(){
    if(gridvar==0)
    {
        var eachdiv=cont.querySelectorAll('div');
        eachdiv.forEach((item)=>{
          item.style.border=`1px solid gray`;
        });
       
     grider.style.transform=`scale(0.9)`;
     gridvar=1;
    }
    else{
        var eachdiv=cont.querySelectorAll('div');
        eachdiv.forEach((item)=>{
          item.style.border=`0px solid gray`;
        });
     grider.style.transform=`scale(1)`;
     gridvar=0;
    }
}

function doubleclick(){
    if(dblclickvar==0){
       dblclickvar=1;
    }else{
      dblclickvar=0
    }
}