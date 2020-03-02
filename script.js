// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  var capsRequired = document.getElementById("#capitalChar").value;
  var specRequired = document.getElementById("#specialChar").value;
  var pwdLength = document.getElementById("#passwordLength").value;
       
//****notes***
// smaple code var password=""; initialize before loop
//            password = password.concat(array??)



    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
