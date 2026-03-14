
//<------------------------------------------------>
// task 2

let header = document.createElement("header");
let content = document.createElement("div");
let footer = document.createElement("footer");

header.className = "website-header";
let logo = document.createElement("div");
logo.textContent = "Elzero";
logo.style.cssText = "font-weight: bold; color: #23a96e; font-size: 26px;";

let menu = document.createElement("ul");
let menuItems = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < menuItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = menuItems[i];
    li.style.marginRight = "10px";
    li.style.display = "inline-block";
    li.style.color = "#666";
    menu.appendChild(li);
}

header.appendChild(logo);
header.appendChild(menu);
header.style.cssText = "display: flex; padding: 20px; background-color: white; justify-content: space-between; align-items: center;";

content.className = "content";
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; background-color: #ececec; min-height: calc(100vh - 142px); box-sizing: border-box;";

for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText = "padding: 20px; background-color: white; border: 1px solid #ddd; width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: #888; border-radius: 6px;";
    
    let span = document.createElement("span");
    span.textContent = i;
    span.style.cssText = "font-size: 40px; color: black; font-weight: 100; display: block; margin-bottom: 10px;";
    
    product.appendChild(span);
    product.append("Product");
    content.appendChild(product);
}


footer.className = "footer";
footer.textContent = "Copyright 2021";
footer.style.cssText = "background-color: #23a96e; font-size: 26px; text-align: center; padding: 20px; color: white;";

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);


document.body.style.cssText = "margin: 0; font-family: Arial, sans-serif;";

//<------------------------------------------------>
// task 3
// تكليف 1
let range = prompt("Print Number From – To", "5-20");
let numbers = range.split("-");

let num1 = parseInt(numbers[0]);
let num2 = parseInt(numbers[1]);


let start = num1 < num2 ? num1 : num2;
let end = num1 > num2 ? num1 : num2;

for (let i = start; i <= end; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);
}
// 2تكليف
function createPopup() {
    let popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <div style="background-color: #eee; border: 1px solid #ccc; padding: 20px; width: 400px; margin: 100px auto; text-align: center; position: relative;">
            <span id="close" style="background-color: red; color: white; width: 25px; height: 25px; border-radius: 50%; display: block; position: absolute; top: -10px; right: -10px; cursor: pointer; line-height: 25px;">x</span>
            <h2>Welcome</h2>
            <p>Welcome To Elzero Web School</p>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById("close").onclick = function () {
        this.parentElement.parentElement.remove();
    };
}


setTimeout(createPopup, 5000);
//  4 ,3تكليف

let div = document.createElement("div");
div.textContent = "10"; 
div.style.cssText="background-color: green;color:white; display:flex; justify-content:center; align-items:center; width:300px; height:100px; ";
document.body.appendChild(div);


let counter = setInterval(function () {
    div.textContent -= 1; 
    
    if (div.textContent === "0") {
        clearInterval(counter); 
        location.href = "https://elzero.org";
    }
}, 1000);

// 5تكليف

let div2 = document.createElement("div");
div2.textContent = "10";
document.body.appendChild(div2);
div2.style.cssText="background-color: red ;color:white; display:flex; justify-content:center; align-items:center; width:300px; height:100px; ";


let counter2 = setInterval(function () {
    div2.textContent -= 1;

    if (div2.textContent === "5") {

        window.open("https://elzero.org", "_blank", "width=400,height=400");
    }

    if (div2.textContent === "0") {
        clearInterval(counter2);
    }
}, 1000);

