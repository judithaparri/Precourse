// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  
  for (let i = 0; i < arr.length; i++) 
  { 
    arr[i] = arr[i] + 1;
  }
  return arr;
 
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

  let str = words[0];
  for (let i = 1; i < words.length; i++) 
  { 
    str = str + ' ' + words[i];
  }
  return str;
  
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  let is_inside = false;
  for (let i = 0; i < arr.length; i++) 
  { 
    if( arr[i] === item)
    {
       is_inside = true;
       break;
    }
  }
  return is_inside;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) 
  { 
    sum = sum + numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  
  let sum_score = 0;
  for (let i = 0; i < testScores.length; i++) 
  { 
    sum_score = sum_score + testScores[i];
  }

  return sum_score / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  
  let largest_int = numbers[0];
  for (let i = 1; i < numbers.length; i++) 
  { 
    if( largest_int < numbers[i] )
    {
      largest_int = numbers[i];
    }
  }
  return largest_int;
 }

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
};
