# 03 JavaScript: Password Generator

This site uses javascript to create a random password.

There are certain criteria that need to be met. The length of the password needs to be a minimum of 8 characters.
The maximum that the password can be is 128 characters. The site validates this data and returns an error to the user.

There are prompts for user password character type criteria. This should include upper case, lower case, numerals and special characters. If no input character type this is validated and again an error is sent to the page.

Once the user hits submit, these minimum requirements are checked. The code will then call a function to generate a password.

The password is utilizes a do while loop as it must be completed at least once. Password is initialized to be blank.
Inside the loop the code randomizes a number between 1 and 4. This number determines which character type to add to the password string. There is a check to see if the character type was selected by the user before adding to the string. If these criteria are not met nothing is added to the string and the increment counter needs to be reduced.

Finally there is a validation required. An array is set set up with false values. When a character type is selected, the corresponding array value is set true. If one of these is false after the password is created and the user selected the character type, then code will repeat the password generation. If it is validated then at this point the password can be sent as an output to the screen.


Here is the URL of the deployed site
https://craigfbarry.github.io/password-generator/





The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

