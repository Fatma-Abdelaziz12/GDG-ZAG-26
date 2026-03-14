//STRINGS
// تكليف 1
let userName = "Elzero";
console.log(userName.slice(0,1).toLocaleLowerCase());
console.log(userName.charAt(0).toLocaleLowerCase());
console.log(userName.substring(0,1).toLocaleLowerCase());
console.log(userName.substr(0,1).toLocaleLowerCase());
console.log(userName[0].toLocaleLowerCase());
console.log(userName.slice(-6,1).toLocaleLowerCase().repeat(3));

// تكليف 2
let word = "Elzero";
let letterZ="z";
let letterE="e";
let letterO="O";
console.log(word.includes(letterZ));
console.log(word.includes(letterE.toUpperCase()));
console.log(word.includes(letterO.toLowerCase()));

// ARRAYS
// تكليف 1  
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.length=num;
console.log(myFriends.slice(false,num));
console.log(myFriends); 

// تكليف2       
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.splice(0, 1);
friends.splice(2, 1);
console.log(friends); 

// تكليف3 
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr=arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr);

// تكليف4 
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log( words[website.length][0].toUpperCase().slice(2,7));

// تكليف5 
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if(haystack.includes(needle)){
    console.log("Found");
}
if(!haystack.indexOf(needle)!==-1){
    console.log("Found");
}
if(haystack.lastIndexOf(needle)!==-1){
    console.log("Found");
}
// تكليف6 
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=arr1.concat(arr2).sort().splice(4,3).join("").toLowerCase();

console.log(allArrs);





// DATE
//تكليف 1

let birthDate = new Date("2005-04-12");
let now = new Date();

let diff = now - birthDate;

console.log(diff / 1000 + " Seconds");
console.log(diff / 1000 / 60 + " Minutes");
console.log(diff / 1000 / 60 / 60 + " Hours");
console.log(diff / 1000 / 60 / 60 / 24 + " Days");
console.log(diff / 1000 / 60 / 60 / 24 / 30 + " Months");
let years = now.getFullYear() - birthDate.getFullYear();
console.log(years + " Years");


