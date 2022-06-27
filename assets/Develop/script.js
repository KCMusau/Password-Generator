// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
console.log(upperCase)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "0123456789".split('');
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|".split('');

function getOptions(){
  let len = parseInt(prompt('Select a number from 8-128'));
 // console.log(len)
 if (isNaN(len) === true) {
    alert('Password length must be  a number');
    return;
  }
if (len < 8){
  alert("Password length must be greater than 8 charcters");
  return;
}
if (len > 128){
  alert("Password must be equal to or less than 128 characters");
  return;
}

let isUpperCase = confirm("Click ok to add upper case characters");
let isNumber = confirm("Click ok to add numbers");
let isSpecial = confirm("Clicl ok to add special characters");
let isLowerCase = confirm("Click to add lowercase characters");
if (isUpperCase === false && isLowerCase === false && isSpecial === false && isNumber === false){
  alert("Atleast one character type must be selected");
  return;
}

let passwordOptions = {
  len:len, 
  isUpperCase:isUpperCase,
  isLowerCase:isLowerCase,
  isNumber:isNumber,
  isSpecial:isSpecial,
}
//console.log("passwordOptions",passwordOptions)
  return passwordOptions;
}

function generatePassword(){
  let options = getOptions()
  console.log("Options",options)
  let password = []
  let possible = []
  let chosen = []
  if (options.isUpperCase){
   possible = possible.concat(upperCase)
   let getRandom = random(upperCase)
   chosen.push(getRandom)
 }
 if (options.isLowerCase){
   possible = possible.concat(lowerCase)
   let getRandom = random(lowerCase)
   chosen.push(getRandom)
 }
 if(options.isNumber){
  possible = possible.concat(numbers)
  let getRandom = random(numbers)
  chosen.push(getRandom)
 }
 if(options.isSpecial){
  possible = possible.concat(special)
  let getRandom = random(special)
  chosen.push(getRandom)
 }
 console.log("chosen",chosen)
 console.log("possible",possible)
 for (let i = 0; i < options.len;i++){
  let ran = random(possible);
  password.push(ran);
  }
 for(let i = 0; i < chosen.length;i++){
  password[i] = chosen[i]
 }
  return password.join("");
}
function random(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  let randElement = arr[rand];

  return randElement;
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 console.log("password", password)
  var passwordText = document.querySelector("#password");
 // let len = prompt('Select a number from 8-128');
console.log("passwordText",passwordText)
  passwordText.value = password;

}

//generatePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
