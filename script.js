// Assignment Code
var generateBtn = document.querySelector("#generate");

//var password = {

var lowerRequired = document.querySelector("#lowerChar");
var numRequired = document.querySelector("#numeral");
var capsRequired = document.querySelector("#capitalChar");
var specRequired = document.querySelector("#specialChar");
var pwdLength = document.querySelector("#passwordLength");

//Using an array for special characters as they are not continuous in UTF
var specialChar =["!","@","#","$","%","^","&","*","(",")"];



// Write password to the #password input 
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function writePassword() {
var passwordString = "";

console.log(lowerRequired);
console.log(numRequired);

console.log(capsRequired);
console.log(specRequired);
console.log(pwdLength.value);




// Validate password length as requirement is 8-128 characters
// Use String.fromCharCode() to use UTF (range lower case 97-122)
if (pwdLength.value>7 && pwdLength.value<129)                      
    {

    for (i=0;i<pwdLength.value;i++){
        var charTypes = getRandom(4);

        if (charTypes === 0 && lowerRequired.checked === true){
            passwordString = (passwordString.concat(String.fromCharCode(getRandom(26)+97)));
        }
        else if (charTypes === 1 && numRequired.checked === true) {
            passwordString = (passwordString.concat(getRandom(10)));
        }
        else if (charTypes === 2 && specRequired.checked === true) {
            passwordString = (passwordString.concat(specialChar[getRandom(10)]));
        }
        else if (charTypes === 3 && capsRequired.checked === true) {
            passwordString = (passwordString.concat(String.fromCharCode(getRandom(26)+65)));
        }
    

        else {(i--);}
         }
    
    console.log(passwordString);
    document.getElementById("password").textContent= passwordString;
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
