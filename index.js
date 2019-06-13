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

function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  } else {
    if (string[0] === string[string.length-1]){
      return isPalindrome(string.slice(1,-1))
    } else {
      return false
    }
  }
}

function addUpTo(arr, idx) {
  if (idx <= 0) {
    return arr[idx]
  } else {
    return arr[idx] + addUpTo(arr, idx-1)
  }
}

function maxOf(arr){
  if (arr.length <= 1) {
    return arr[0]
  } else {
    return maxOf(arr[0] > arr[1] ? [arr[0], ...arr.slice(2)] : arr.slice(1))
  }
}

function includesNumber(arr, n) {
  if (arr[0] === n) {
    return true
  } else {
    if (arr.length <= 0) {
      return false
    } else {
      return includesNumber(arr.slice(1),n)
    }
  }
}
