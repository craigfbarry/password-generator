// Assignment Code
var generateBtn = document.querySelector("#generate");

//var password = {

var pwdReq = {
    lower         :"",
    number        :"",
    caps          :"",
    special       :"",
    pwdLength     :"",
   
    };

pwdReq.lower = document.querySelector("#lowerChar");
pwdReq.number = document.querySelector("#numeral");
pwdReq.caps = document.querySelector("#capitalChar");
pwdReq.special = document.querySelector("#specialChar");
pwdReq.pwdLength = document.querySelector("#passwordLength");

//Using an array for special characters as they are not continuous in UTF
var specialChar =["!","@","#","$","%","^","&","*","(",")"];


// Write password to the #password input 
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function writePassword() {

// Validate password length as requirement is 8-128 characters
// And validate at least on character type selected

if (pwdReq.pwdLength.value<8 || pwdReq.pwdLength.value>128)     
    {
        document.getElementById("password").textContent= "Invalid Range";
    }

else if   (pwdReq.caps.checked === false && pwdReq.lower.checked === false && pwdReq.number.checked === false && pwdReq.special.checked === false)
    {  
       document.getElementById("password").textContent= "No Character type selected"; 
    }
   


else {
   // Use String.fromCharCode() to use UTF (range lower case 97-122)
   generatePassword();
    
    }
}

function generatePassword() {
  var counter = 0; 
do {
    var passwordString = "";
    var validate = [false,false,false,false];
    for (i=0;i<pwdReq.pwdLength.value;i++){
        var charType = getRandom(4);
        

        if (charType === 0 && pwdReq.caps.checked === true) {
            passwordString += String.fromCharCode(getRandom(26)+65);
            validate[0] = true;
                        
        }
        else if (charType === 1 && pwdReq.lower.checked === true){
            passwordString += String.fromCharCode(getRandom(26)+97);
            validate[1] = true;
        }
        else if (charType === 2 && pwdReq.number.checked === true) {
            passwordString += getRandom(10);
            validate[2] = true;
        }
        else if (charType === 3 && pwdReq.special.checked === true) {
            passwordString += specialChar[getRandom(10)];
            validate[3] = true;
        }
    

        else {(i--);}
    }
     counter++
} while (pwdReq.caps.checked != validate[0] || pwdReq.lower.checked != validate[1] || pwdReq.number.checked != validate[2] || pwdReq.special.checked != validate[3]);
    
    console.log(counter);
    console.log(validate);
    console.log(pwdReq.caps.checked);
    console.log(pwdReq.lower.checked);
    console.log(pwdReq.number.checked);
    console.log(pwdReq.special.checked);
    console.log(passwordString);
    document.getElementById("password").textContent= passwordString;
}


//****notes***




    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
