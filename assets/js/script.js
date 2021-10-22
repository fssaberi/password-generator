// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = [ 
"a", 
"b", 
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
];

var uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["[", "]", "!", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
var results = [];

// password generated
function generatePassword() {
  console.log("");
  var password = "";

  // Prompt passwordLength
  var passwordLength = Number(prompt("How many characters do you want your password to include?"));

  // If passwordLength is blank, less than 8, or greater than 128, create alert to select one between 8 and 128.
  while (isNaN(passwordLength) || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    alert("Please select a password between 8 and 128 characters.")
  }

  // Prompt for character types to include in the password
  while (passwordLength >= 8 && passwordLength <= 128) {
    var lowercase = confirm("Do you want to include lowercase letters in your password?");
    var uppercase = confirm("Do you want to include uppercase letters in your password?");
    var numeric = confirm("Do you want to include numbers in your password?");
    var special = confirm("Do you want to include special characters in your password?");
    break;
  } 

  // input validated and at least one character type should be selected
  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("You must select lowercase, uppercase, numeric, and/or special characters for your password.")
    
    generatePassword();
  } 

  console.log(passwordLength, lowercase, uppercase, numeric, special)
  console.log(typeof passwordLength)
  console.log(typeof lowercase)

  while (passwordLength) {
    if (numeric === true) {
      results.push(getRandom(numbersChar));
    }

    if (special === true) {
      results.push(getRandom(specialChar));
    }

    if (lowercase === true) {
      results.push(getRandom(lowercaseChar));
    }

    if (uppercase === true) {
      results.push(getRandom(uppercaseChar));
    }

    if (results.length === passwordLength) {
      break;
    }
  }
  
  console.log(results);

  // password shows in box
  return results.join('');
}

function getRandom(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];
  console.log(index, element);
  return element;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);