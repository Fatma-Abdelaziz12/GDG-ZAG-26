// TASK-1
document.body.style.cssText = "font-family: Arial, sans-serif; padding: 20px;";

// التكليف1 

let el1 = document.getElementById("elzero");
let el2 = document.getElementsByClassName("element")[0];
let el3 = document.getElementsByTagName("div")[0];
let el4 = document.getElementsByName("js")[0];
let el5 = document.querySelector("#elzero");
let el6 = document.querySelector(".element");
let el7 = document.querySelector("[name='js']");
let el8 = document.querySelectorAll("#elzero")[0];
let el9 = document.querySelectorAll(".element")[0];
let el10 = document.querySelectorAll("div")[0];
let el11 = document.body.firstElementChild;
let el12 = document.body.children[0];
let el13 = document.querySelector("div");
let el14 = document.querySelectorAll("[name='js']")[0];
let el15 = document.getElementById("elzero").cloneNode(true); 



// التكليف 3
let dollarInput = document.querySelector("[name='dollar']");
let resultDiv = document.querySelector(".result");

dollarInput.oninput = function () {
    let result = (dollarInput.value * 15.6).toFixed(2);
    resultDiv.innerHTML = `{${dollarInput.value}} USD Dollar = {${result}} Egyptian Pound`;
};


// التكليف6 

let form6 = document.querySelector(".assignment-06");
let inputCount = document.querySelector("[name='elements']");
let inputText = document.querySelector("[name='texts']");
let inputType = document.querySelector("[name='type']");
let resultsContainer = document.querySelector(".results");


form6.style.cssText = "display: flex; flex-direction: column; width: 300px; gap: 10px; margin-top: 20px;";
document.querySelectorAll(".input").forEach(i => i.style.padding = "10px");
form6.create.style.cssText = "background-color: #009688; color: white; border: none; padding: 10px; cursor: pointer; border-radius: 4px;";

resultsContainer.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; margin-top: 20px;";

form6.onsubmit = function (e) {
    e.preventDefault();
    resultsContainer.innerHTML = ""; 

    for (let i = 1; i <= inputCount.value; i++) {
        let el = document.createElement(inputType.value.toLowerCase());
        el.className = "box";
        el.title = "Element";
        el.id = `id-${i}`;
        el.textContent = inputText.value;

        el.style.cssText = " background-color: #ff5722 ; color: white; padding: 15px;text-align: center;border-radius: 6px;font-weight: bold;";
        resultsContainer.appendChild(el);
    }
};
