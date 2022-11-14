//1. Let user know passcode criteria
// pw length minimum 8 characters
// letters, numbers, special characters

//2.correction input -between 

//3. create passcode

//4. show the passcode

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialSymbols = "!@#$%^&*()_+-="
var numbers = "1234567890"
var passcodeLength = 10;
var userVarying = "";

function random() {
  var passcode ="";
  for (var i=0; i<passcodeLength; i++) {
  var randomNum = Math.floor(Math.random() * userVarying.length);
   passcode = passcode + userVarying[randomNum];
  }
  return passcode;
}

function generatepasscode() {

  var passcodeLength = lengthCheck ()
//console.log (passcodeLength)

  function lengthCheck() {
   
    var lengthChar = window.prompt("Choose a number between 8 - 128. This will help us create the perfect encription for your passcode"); 
    //debugger;
    let dissectSet = parseInt(lengthChar)
    if (dissectSet < 8) {
      window.alert("Choose a number between 8-128")
      return lengthCheck()
    }
    else if (dissectSet > 128) {
      window.alert("Choose a number between 8-128")
      return lengthCheck()
    }
    else {
     return dissectSet
    }
  
    console.log ("hello")
  }
  
  if (confirm("Would you like lowercase charcters? if YES, click OK")===true){
  userVarying+=lowercaseLetters 
  } 

  if (confirm("Would you like uppercase charcters? if YES, click OK")===true){
    userVarying+=uppercaseLetters 
    } 

  if (confirm("Would you like special charcters? if YES, click OK")===true){
      userVarying+=specialSymbols 
      } 
  if (confirm("Would you like numeric charcters? if YES, click OK")===true){
        userVarying+=numbers 
        } 
  
//if statements for other types of characters
//we will use the userVarying as our "array" for the math.random function 
//var randomNum=math.floor(math.random()*passcodeLength)
//var char =userVariable[randomNum]
// for loop the math.random logic i< passcodeLength

return userVarying
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write passcode to the #passcode input
function writepasscode() {
  var correctPrompt = generatepasscode();
  var passcodeText = document.querySelector("#passcode");

  if (correctPrompt){
    var newpasscode=random ();
    passcodeText.value = newpasscode;
  }
  else {
    passcodeText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writepasscode);
