function convertMe(func, input, output){
  let sendIn = document.getElementById(input).value;
  document.getElementById(output).innerHTML = "";
  document.getElementById(output).innerHTML = func(sendIn);
};


//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32 ;
  return fahrenheit;
};


convertToF(30);

// String Reverser
function reverseString(str) {
  let array = [...str];
  let backwardsArray = array.reverse();
  let result = backwardsArray.toString().replace(/,/g, '');
  return result;
};

reverseString("hello");

//Factorialize a number:

function factorialize(num) {
 let posIntegers = [];
 if (num == 0){ return 1};
 while (num > 0){
   posIntegers.push(num);
   num--;
 }
 return posIntegers.reduce( (a,b) => a * b );
};

factorialize(5);

//Find the longest word in a String: (Great explanation at https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c)
function findLongestWordLength(str) {
  let sortMe = str.split(' ');
  sortMe.sort(function(a, b) { return b.length - a.length; });
  return sortMe[0].length;
};
//Find the largest number in a Subarray:

function largestOfFour(arr) {
  let results = [];
  for (let i of arr){
    i.sort(function(a, b){ return b - a });
  results.push(i[0]);
  }
  return results;
};

// Confirm the ending of a string(This challenge can be solved with the .endsWith() method):

function confirmEnding(str, target) {
  if (str.slice(-target.length) == target){
    return true;
  }
  else{
    return false;
  }
};
// Repeat a string a number of times:
function repeatStringNumTimes(str, num) {
  let result = '';
  while (num > 0){
    result = result + str;
    num--;
  };
  return result;
}


repeatStringNumTimes("abc", 3);

//Truncate a string:
function truncateString(str, num) {
 if(str.length > num){
  let myTruncatedString = str.substring(0,num);
  return myTruncatedString + "...";}
  else return str;
}

// Searches an array for the first element that passes a truth test, else returns undefined

function findElement(arr, func) {
  let num = 0;
  for (let i of arr){
    num = i;
    if(func(num)){
      return num;
    }
  }
  return undefined;
}
// Checks if the parameter is a boolean or not
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';
};

// Makes the first letter of each word in a string uppercase:

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

// Remove falsey values from an array.
function bouncer(arr) {
  if(typeof arr === 'string'){
    arr.split(',');
  }
  return arr.filter(Boolean);
}


//Puts a number into an array, sorts small to high, finds numbers index
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  let sortedArr = arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

// Breaks an array up by a number, into an array with subarrays with the length equal to that number
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr =[];
  while(arr.length){
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

//Puts arr1 into arr2 at the index of n.
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let frank = arr2.slice();
  frank.splice(n, 0, ...arr1.slice(0));
  return frank;
}

// Searches array[0] to see if it contains each letter in array[1]
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

//Intermediate Algorithms!

//Finds the summ of two numbers and all integers in between
function sumAll(arr) {
  let result = [];
  let bottom = Math.min(...arr);
  let top = Math.max(...arr);
  for (let i = bottom; i <= top; i++){
    result.push(i);
  }
  return result.reduce((a,b) => a + b );
 };

 //New array out of elements that only occur in one of the arrays passed through

 function diffArray(arr1, arr2) {
  let combinedArr = [...arr1, ...arr2];
  let part1 = combinedArr.filter( ( el ) => !arr1.includes( el ) );
  let part2 = combinedArr.filter( ( el ) => !arr2.includes( el ) );
  return part1.concat(...part2);
}

//Pass through an array and any number of argument afterward to remove them from the array

const destroyer = (arr, ...rest) => arr.filter(i => !rest.includes(i));

//Converts a string to Spinal Case, all lowercase words joined by dashes

function spinalCase(str) {

return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

//Piglatin Translator

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

//an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties and values in the Object passed as second parameter.

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

// Search for a word and replace, keeping the case of the first letter of the original word

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()){
   after = after.charAt(0).toUpperCase() + after.slice(1)
  }
  return str.replace(before, after);
}

//Pairs the DNA element with its appropriate strand A+T C+G

function pairElement(str) {
  str = str.toUpperCase();
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  let arr = str.split("");
  return arr.map(x => [x,pairs[x]]);
};

// Find the missing letter in a letter range and return it, fully self written took a long time and looks clean to me =D

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.trim().toLowerCase();
      chunk = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[0]) + str.length + 1);
  for (let l of chunk){
    if (!str.includes(l)){
      return l;
    }
}
};

//Combine any arrays passed through into a single array removing duplicates

function uniteUnique(...rest) {
  const bigArr = [].concat(...rest);
  return [...new Set(bigArr)];
};


