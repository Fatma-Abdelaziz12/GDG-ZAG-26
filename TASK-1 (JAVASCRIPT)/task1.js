// ----dataTypes 
// تكليف 1
let  numberOne = 10;
let  numberTwo = 20;
console.log(numberOne.toString() + numberTwo.toString());
console.log( typeof(numberOne.toString() + numberTwo.toString()));
console.log(`${numberOne}${numberTwo}`);
console.log( typeof(`${numberOne}`+`${numberTwo}`));
console.log(numberTwo.toString() + "\n" + numberOne.toString());
console.log(`${numberTwo}
${numberOne}`);

// تكليف 2
console.log(elzero.innerHTML);
console.log(typeof(elzero));

// تكليف 3
console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``")


//----operators
// تكليف 1
console.log(10 * 20 * 15 * 3 * 190 % 10 * 400); 

// تكليف 2
let num = 3;
console.log(num*(true+true)); 
console.log(num+true+true+true);
console.log(num+num);
console.log(num*(num-true));
console.log(num*true +num);
console.log((num-false)*(true+true));

//numbers
// تكليف 6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(flt-0.4); // 10
console.log(Math.round(flt)); // 10
console.log(Math.ceil(flt)-1); // 10
console.log(Math.trunc(flt)); // 10

// تكليف 7
console.log(Math.floor(5*Math.random())); // 0 || 1 || 2 || 3 || 4

//Strings and methods
// تكليف 1
let userName="Elzero";
console.log(userName.charAt(0).toLowerCase());
console.log(userName[0].toLowerCase());
console.log(userName.slice(0,1).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName.substr(0,1).toLowerCase());
console.log(userName[0].toLowerCase().repeat(3));

//تكليف 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase())); 
console.log(word.endsWith(letterO.toLowerCase())); 

//comparison and logical operators
// تكليف 1
console.log(100 !== "100"); 
console.log(100 < 1000);
console.log(110 > 100 && 10 < 20); 
console.log(-10 == "-10"); 
console.log(+ -50 != +"-40"); 
console.log(+10 >"-40"); 
console.log(-"10" != 10); 
console.log(! 20 == false); 

//تكليف2 
let num1 = 10;
let num2 = 20;

console.log(num1!=num2); 
console.log(num1<num2); 
console.log(!num1 == false); 
console.log(typeof(num1) === typeof(num2)); 
console.log(num2>=num1); 
console.log(num1<=num2); 

//if conditions
//تكليف1
let number = 8;

if(number<10){
    console.log("00"+number);
}
else if( number>10 && number<100 ){
    console.log("0"+number);
}
else if(number>=100){
    console.log(number);
}

//تكليف2 
let n1 = 9;
let str = "9";
let str2 = "20";

if(n1==str){
    console.log('{n1} Is The Same Value As {str}');

}
else if(n1==str && n1!==str){
    console.log('{n1} Is The Same Value As {str} But Not The Same Type');

}
else if(n1!==str2 && n1!=str){
    console.log('{n1} Is Not The Same Value Or The Same Type As {str2}');

}
if( typeof str === typeof str2 && str!=str2){
    console.log('{str} Is The Same Type As {str2} But Not The Same Value');
}

 // switch statement
 //تكليف1
 let day="     friday     ";
 day=day.trim();
 day= day.replace(day[0],day[0].toUpperCase());
 switch (day) {
    case "Friday" :
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday" :
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday" :
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");

 }


 //for loop

 // التكليف 1
 let name='';
  let swappedName="elZerO";
 for(let i=0;i<swappedName.length;i++) {
    if (swappedName[i] == swappedName[i].toUpperCase()){
        name+=swappedName[i].toLowerCase();
    }
    else if(swappedName[i] == swappedName[i].toLowerCase()){
        name+=swappedName[i].toUpperCase();

    }
 }
    console.log(name);

// التكليف 2
let char=[1 ,2 ,3,'a','b','c',4];
for(let i=0;i<char.length;i++){
    if(typeof char[i] === 'number' && char[i]!=1){
        console.log(char[i]);
    
    }

}

//while loop
// تكليف 1

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let counter = 0;
let i=0;
while(i<friends.length){
    if( (typeof friends[i] !== 'number' ) &&  (!friends[i].startsWith('A')) ){
        counter++;
    console.log(  counter +"=>" + friends[i]);
    }
    i++;

}


// functions and parameters
// تكليف 2 
function calculate(firstNum, secondNum, operation) {
    if(secondNum===undefined ||firstNum===undefined)
        console.log('invalid operation');
    else if(operation==='add')
         console.log(firstNum + secondNum);
    else if(operation==='subtract')
        console.log(firstNum - secondNum);
    else if( operation==='multiply')
        console.log(firstNum * secondNum);
    else if(operation===undefined)
         console.log(firstNum + secondNum);

 

}
calculate(20); 
calculate(20, 30); 
calculate(20, 30, 'add'); 
calculate(20, 30, 'subtract'); 
calculate(20, 30, 'multiply'); 


//تكليف 4
function checkStatus(a, b, c) {
    let name ,age,status,showstatus;
    [a,b,c].forEach(function(param){
        if(typeof param ==='string'){
            name=param;
        }
        else if(typeof param ==='number'){
            age=param;

        }
        else if(typeof param ==='boolean'){
            status=param;
        }
        

    }
)
    if(status===true){
        showstatus="You Are Available For Hire";
    }
    else if(status===false){
        showstatus="You Are Not Available For Hire";
    }
        console.log('Hello ' + name + ', Your Age Is ' + age + ','+ showstatus);
}

checkStatus("Osama", 38, true); 
checkStatus(38, "Osama", true); 
checkStatus(true, 38, "Osama"); 
checkStatus(false, "Osama", 38);

// تكليف 5
function createSelectBox(startyear,endyear){
    document.write(`<select>`);
    for(let i=startyear;i<=endyear;i++){
        document.write(`<option value=' ${i}'>${i}</option>`);
    }
    document.write(`</select>`);

}
 createSelectBox(2020,2030);

// functions and scopes
// تكليف 1
 function getDetails(zName,zAge,zCountry){
    function countryTwoLetters(zCountry){
        let country=zCountry.substring(0,2).toUpperCase();
        return `You Live in ${country}`;
    }
    function namePattern(zName){
        let name=zName.split(' ');
        return `${name[0]}  ${name[1][0].toUpperCase()}.`;
    }
    function ageWithMessage(zAge){
        let age=zAge.match(/\d+/);
        return `Your Age is ${age}`;

    }
      function fullDetails(){
        return `Hello ${namePattern(zName)} ,${ageWithMessage(zAge)},${countryTwoLetters(zCountry)}`;


    }
    return fullDetails();



 }
 console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
 console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

 //تكليف
 const itsME =()=>{
     return `Iam A Normal Function`;
 }
 console.log(itsME());
 
 const urlCreate=(protocol, web, tld)=>{
    return `${protocol}://www.${web}.${tld}`;
 }
 
console.log(urlCreate("https", "elzero", "org"));