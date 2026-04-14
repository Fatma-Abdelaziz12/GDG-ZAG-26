



let fontselect =document.getElementById("font");
let colorselect =document.getElementById("color");
let sizeselect= document.getElementById("size");
let text=document.getElementById("text");
fontselect.onchange= function(){
    text.style.fontFamily=this.value;
    window.localStorage.setItem("font",this.value);
}
colorselect.onchange= function(){
    text.style.color=this.value;
    window.localStorage.setItem("color",this.value);

}
sizeselect.onchange= function(){
    text.style.fontSize=this.value;
    window.localStorage.setItem("size",this.value);


}
if( window.localStorage.getItem("font")){
    text.style.fontFamily=window.localStorage.getItem("font");
    fontselect.value=window.localStorage.getItem("font");

}
if( window.localStorage.getItem("color")){
    text.style.color=window.localStorage.getItem("color");
    colorselect.value=window.localStorage.getItem("color");

}
if( window.localStorage.getItem("size")){
    text.style.fontSize=window.localStorage.getItem("size"); 
    sizeselect.value=window.localStorage.getItem("size");
    
}

