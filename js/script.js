// Assignment Code -- given
var generateBtn = document.querySelector("#generate");

//my global variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-"];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generatePassword(){
  //TODO: WRITE THE CODE THAT ASKS THE USER ABOUT THE PARAMETERS FOR THEIR 
  //variables within this function
  var generatedPass = [];
  var passwordStr = "";

  //prompt allows the user to put some kind of input
  var passwordLength = prompt("Choose a number between 8 and 128 for password length");
  if((passwordLength <= 8) || (passwordLength >= 128)) {
    alert("ERROR: must be a number between 8 and 128");
    return generatePassword();
  } else if (!passwordLength){
    alert("ERROR: please choose a number between 8 and 128");
    return generatePassword();
  } else {
    userParameters();
  }


  //TODO: USE THOSE PARAMETERS TO GENERATE A NEW PASSWORD

  function userParameters(){
    var pickLowerCase = confirm("Do you want lowercase letters in your password?");

    if(pickLowerCase){
      generatedPass = generatedPass.concat(lowerCaseChar);
    }

  var pickUpperCase = confirm("Do yo want uppercase letters in your password?");
    if(pickUpperCase){
      generatedPass = generatedPass.concat(upperCaseChar);
    }

  var pickSpecialChar = confirm("Do you want to use special characters in your password?");
    if(pickSpecialChar){
      generatedPass = generatedPass.concat(specialChar);
    }
  
  var pickNumber = confirm("Do you want to use numbers in your password?");
    if(pickNumber){
      generatedPass = generatedPass.concat(numericChar);
    }
  }
  //if no parameters are selected show alert
  if(generatedPass.length === 0){
    alert("ERROR: You must choose at least one parameter to generate a password.");
    return userParameters;
  }

  //FOR loop to go through the array to shuffle password with selected parameters
  //shuffle the generatedPass array into a new array and turn into one string
  for(var i = 0; i < generatedPass.length; i++){
    var randomize = Math.floor(Math.random() * generatedPass.length);
    var shuffledArr = generatedPass[randomize];

    passwordStr += shuffledArr;
  }


  //TODO: RETURN THAT PASSWORD
  return passwordStr;
}


// Write password to the #password input -- given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button -- given
generateBtn.addEventListener("click", writePassword);
