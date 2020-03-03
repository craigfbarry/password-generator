// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {
var passwordString = "";
var passwordText = ""; 
var capsRequired = document.querySelector("#capitalChar").checked;
var specRequired = document.querySelector("#specialChar").checked;
var pwdLength = document.querySelector("#passwordLength").value;

console.log(capsRequired);
console.log(specRequired);
console.log(pwdLength);


if (pwdLength>7 && pwdLength<129){

    for (i=0;i<pwdLength;i++){

     //   passwordString = (passwordString.concat(passwordText.fromCharCode(97)));
     passwordString = (passwordText.fromCharCode(65));


    }
    console.log(passwordString);
}

else {
    console.log("range invalid");    
    }

//****notes***




    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
