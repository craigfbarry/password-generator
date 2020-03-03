// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input


function writePassword() {
var passwordString = "";

var capsRequired = document.querySelector("#capitalChar").checked;
var specRequired = document.querySelector("#specialChar").checked;
var pwdLength = document.querySelector("#passwordLength").value;
var specialChar =["!","@","#","$","%","^","&","*","(",")"];


console.log(capsRequired);
console.log(specRequired);
console.log(pwdLength);


// Validate password length as requirement is 8-128 characters
// Use String.fromCharCode() to use UTF (range lower case 97-122)
if (pwdLength>7 && pwdLength<129){

    for (i=0;i<pwdLength;i++){
        var charTypes = (Math.floor(Math.random()*Math.floor(4)));

        if (charTypes ===0){
            passwordString = (passwordString.concat(String.fromCharCode(Math.floor(Math.random()*Math.floor(26))+97)));
        }
        else if (charTypes ===1) {
            passwordString = (passwordString.concat(Math.floor(Math.random()*Math.floor(10))));
        }
        else if (charTypes ===2 && specRequired === true) {
            passwordString = (passwordString.concat(specialChar[Math.floor(Math.random()*Math.floor(10))]));
        }
        else if (charTypes ===3 && capsRequired=== true) {
            passwordString = (passwordString.concat(String.fromCharCode(Math.floor(Math.random()*Math.floor(26))+65)));
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
