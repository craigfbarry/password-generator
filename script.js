// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {

var capsRequired = document.querySelector("#capitalChar").checked;
var specRequired = document.querySelector("#specialChar").checked;
var pwdLength = document.querySelector("#passwordLength").value;

console.log(capsRequired);
console.log(specRequired);
console.log(pwdLength);
console.log("function working");


//****notes***
// smaple code var password=""; initialize before loop
//            password = password.concat(array??)



    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
