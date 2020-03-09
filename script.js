// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdReq = {
    lower         :document.querySelector("#lowerChar"),
    number        :document.querySelector("#numeral"),
    caps          :document.querySelector("#capitalChar"),
    special       :document.querySelector("#specialChar"),
    pwdLength     :document.querySelector("#passwordLength"),
   
    };

//Using an array for special characters as they are not continuous in UTF
var specialChar =["!","@","#","$","%","^","&","*","(",")"];
var passwordOutput = document.getElementById("password");
var j = 0;
var speed = 50;



// Pseudorandom number generator
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function writePassword() {

// Validate password length as requirement is 8-128 characters
// And validate at least on character type selected

if (pwdReq.caps.checked === false && pwdReq.lower.checked === false && pwdReq.number.checked === false && pwdReq.special.checked === false)
    {  
       document.getElementById("password").textContent= "No Character type selected"; 
    }

else if (pwdReq.pwdLength.value<8 || pwdReq.pwdLength.value>128)     
    {
        document.getElementById("password").textContent= "Invalid Range";
    }

else {
   // call password generate function

    //var thing = generatePassword();  
    //console.log(thing); 
    passwordOutput.textContent = generatePassword();
    }
}

function generatePassword() {
 
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
     
} while (pwdReq.caps.checked != validate[0] || pwdReq.lower.checked != validate[1] || pwdReq.number.checked != validate[2] || pwdReq.special.checked != validate[3]);
    
    
    return passwordString
    
}

function typeWriter(txt){
    console.log(txt);
    if (j < txt.length) {
        passwordOutput.textContent += txt.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
      }

}






//****notes***

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
