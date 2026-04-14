let selectcolor= document.getElementById("color");
let inputname= document.getElementById("name");
let inputage =document.getElementById("age");
let inputemail =document.getElementById("email");

selectcolor.onchange = function(){
selectcolor.value=window.sessionStorage.setItem("color",this.value);

}
inputname.onchange = function(){
inputname.oninput=window.sessionStorage.setItem("name",this.value);

}
inputage.onchange = function(){
inputage.oninput=window.sessionStorage.setItem("age",this.value);

}
inputemail.onchange = function(){
inputemail.oninput=window.sessionStorage.setItem("email",this.value);

}
if (window.sessionStorage.getItem("color")){
    selectcolor.value=window.sessionStorage.getItem("color");

}
if (window.sessionStorage.getItem("name")){
    inputname.value=window.sessionStorage.getItem("name");

}
if (window.sessionStorage.getItem("age")){
    inputage.value=window.sessionStorage.getItem("age");

}
if (window.sessionStorage.getItem("email")){
    inputemail.value=window.sessionStorage.getItem("email");

}
