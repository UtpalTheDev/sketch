cont=document.querySelector("#container");
window.addEventListener("load",grid);
function grid(){
    for(var i=0;i<16;i++){
    var div=document.createElement("div");
    cont.appendChild(div);  
    }
}