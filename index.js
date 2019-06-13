// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(string){
  if (string.length <= 1){
    return string
  } else {
    let letter = string[string.length-1]
    return letter + reverseString(string.slice(0,-1))
  }
}
