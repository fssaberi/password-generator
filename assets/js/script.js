// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("How many characters do you want your password to include?");
  var lowercase = prompt("Do you want to include lowercase letters in your password?");
  var uppercase = prompt("Do you want to include uppercase letters in your password?");
  var numeric = prompt("Do you want to include nummbers in your password?");
  var special = prompt("Do you want to include special characters in your password?");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);