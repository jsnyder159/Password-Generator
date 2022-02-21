// Variables for min and max length of password
let min = 8
let max = 128
// Arrays for each type of char available for the password
let special = ["!", "@", "#", "$", "%", "^", "&", "*",]
let lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
let upperAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]
// Empty Arry to put the choices made into
let userChoice = []
let passwordString = "";


function userData() {
  //This gives prompt for length of password and will not move forward if Min/Max isn't met

  let = passLength = prompt("Please enter the amount of chararacters required.  Betweem 8 and 128.");
  if (passLength < min) {
    alert("Password must be atleast 8 characters.")
    return null
  }
  if (passLength > max){
    alert("Password must be less than 128 characters.")
    return null
  }

  


  // This gives prompt special char choice, adds 1 random one to passwordString, and the whole array to userChoice
  let specOpt = confirm("Do you want special characters?")
  if (specOpt === true){
    userChoice.push.apply(userChoice, special);
    randomCho = special[Math.floor(Math.random()*special.length)];
    passwordString += randomCho;
  }
  
  console.log(userChoice)
  console.log(passwordString)

   // This gives prompt lower case letter choice, adds 1 random one to passwordString, and the whole array to userChoice
  let lowerOpt = confirm("Do you want lower case characters?")
  if (lowerOpt === true){
    userChoice.push.apply(userChoice, lowerAlph);
    randomCho = lowerAlph[Math.floor(Math.random()*lowerAlph.length)];
    passwordString += randomCho;
  }
  
  console.log(userChoice)
  console.log(passwordString)


 
  // This gives prompt upper case letter choice, adds 1 random one to passwordString, and the whole array to userChoice 
  let upperOpt = confirm("Do you want upper case characters?")
  if (upperOpt === true){
    userChoice.push.apply(userChoice, upperAlph);
    randomCho = upperAlph[Math.floor(Math.random()*upperAlph.length)];
    passwordString += randomCho;
  }

  
  console.log(userChoice)
  console.log(passwordString)
 // This gives prompt number choice, adds 1 random one to passwordString, and the whole array to userChoice  
  let numOpt = confirm("Do you want to use numbers?")
  if (numOpt === true){
    userChoice.push.apply(userChoice, number);
    randomCho = number[Math.floor(Math.random()*number.length)];
    passwordString += randomCho;
  }
  
  console.log(userChoice)
  console.log(passwordString)
 
  // This does the math for the difference of the passLength - passwordString. then makes random choices on the
  // userChoice array which has all other arrays inside of it until the passLength and passwordString are the same
  // length after adding 1 random character to password string it repeats until the difference is 0.
  let numCharLeft = parseInt(passLength) - passwordString.length;
  for (let i = 0; i < numCharLeft; i++){
    randomCho = userChoice[Math.floor(Math.random()*userChoice.length)];
    passwordString += randomCho;
  }

  // return passwordString;
}

function generatePassword() {
  userData()
  return passwordString;
}

// Assignment Code 
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
