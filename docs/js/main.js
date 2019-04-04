function convertMe(func, input, output) {
  let sendIn = document.getElementById(input).value;
  document.getElementById(output).innerHTML = "";
  document.getElementById(output).innerHTML = func(sendIn);
};

$$('.ac-6').on('click', function() {
  ac6.open();
});

var ac6 = app.actions.create({
  grid: true,
  buttons: [
      [{
              text: 'Solar Calculator',
              icon: `<a href="#theSolar" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1512&q=80"/></a>`
          },
          {
              text: 'Carpet Calculator',
              icon: `<a href="#theCarpet" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1486563232043-254f15b9059c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"/></a>`
          },
          {
              text: 'Paint the Walls',
              icon: `<a href="#theWalls" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80"/></a>`
          },
      ],
      [{
              text: 'Pig Latin',
              icon: '<a href="#thePig" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1537033206914-9d3551ff8103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/></a>'
          },
          {
              text: 'Reverser',
              icon: '<a href="#theReverse" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1536250136195-1772ab2d3786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80"/></a>'
          },
          {
              text: 'Alphabet',
              icon: '<a href="#theFinder" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1533226458520-6f71cffeaa6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"/></a>'
          },
      ],
      [{
              text: 'Uppercase',
              icon: '<a href="#theUpper" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1513957723230-c330c6152342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/></a>'
          },
          {
              text: 'Factorialize',
              icon: '<a href="#theFactor" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/></a>'
          },
          {
              text: 'DNA Pair',
              icon: '<a href="#theDNA" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/></a>'
          },
      ],
      [{
              text: 'Celcius',
              icon: '<a href="#theCelc" class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/></a>'
          },
          {
              text: 'Toggle Code',
              icon: `<a href="#" onclick="toggle_visibility('code')"class="external"><img class="contents-list-imgs" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1666&q=80"/></a>`
          },
      ]
  ]
});

function toggle_visibility(cl) {
  var els = document.getElementsByClassName(cl);
  for (var i = 0; i < els.length; ++i) {
      var s = els[i].style;
      s.display = s.display === 'block' ? 'none' : 'block';
  };
}


function toggleCode() {
  let codeInfo = document.getElementsByClassName('code');
  console.log(codeInfo);
  codeInfo.style.display == "block" ? codeInfo.style.display = "none" :
      codeInfo.style.display = "block";
}

//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
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
  if (num == 0) {
      return 1
  };
  while (num > 0) {
      posIntegers.push(num);
      num--;
  }
  return posIntegers.reduce((a, b) => a * b);
};

factorialize(5);

//Find the longest word in a String: (Great explanation at https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c)
function findLongestWordLength(str) {
  let sortMe = str.split(' ');
  sortMe.sort(function(a, b) {
      return b.length - a.length;
  });
  return sortMe[0].length;
};
//Find the largest number in a Subarray:

function largestOfFour(arr) {
  let results = [];
  for (let i of arr) {
      i.sort(function(a, b) {
          return b - a
      });
      results.push(i[0]);
  }
  return results;
};

// Confirm the ending of a string(This challenge can be solved with the .endsWith() method):

function confirmEnding(str, target) {
  if (str.slice(-target.length) == target) {
      return true;
  } else {
      return false;
  }
};
// Repeat a string a number of times:
function repeatStringNumTimes(str, num) {
  let result = '';
  while (num > 0) {
      result = result + str;
      num--;
  };
  return result;
}


repeatStringNumTimes("abc", 3);

//Truncate a string:
function truncateString(str, num) {
  if (str.length > num) {
      let myTruncatedString = str.substring(0, num);
      return myTruncatedString + "...";
  } else return str;
}

// Searches an array for the first element that passes a truth test, else returns undefined

function findElement(arr, func) {
  let num = 0;
  for (let i of arr) {
      num = i;
      if (func(num)) {
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
  if (typeof arr === 'string') {
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
  let newArr = [];
  while (arr.length) {
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
  for (let i = bottom; i <= top; i++) {
      result.push(i);
  }
  return result.reduce((a, b) => a + b);
};

//New array out of elements that only occur in one of the arrays passed through

function diffArray(arr1, arr2) {
  let combinedArr = [...arr1, ...arr2];
  let part1 = combinedArr.filter((el) => !arr1.includes(el));
  let part2 = combinedArr.filter((el) => !arr2.includes(el));
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

  } else if (str.match(regex) === null) {
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
  return collection.filter(function(obj) {
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
  if (before[0] === before[0].toUpperCase()) {
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
  return arr.map(x => [x, pairs[x]]);
};

// Find the missing letter in a letter range and return it, fully self written took a long time and looks clean to me =D

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.trim().toLowerCase();
  chunk = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[0]) + str.length + 1);
  for (let l of chunk) {
      if (!str.includes(l)) {
          return l;
      }
  }
};

//Combine any arrays passed through into a single array removing duplicates

function uniteUnique(...rest) {
  const bigArr = [].concat(...rest);
  return [...new Set(bigArr)];
};

//Calcs Sq ft of a circle room
function floor(diameter) {
  let radius = diameter / 2;
  let floorArea = Math.PI * (radius * radius);
  return floorArea + " Square Foot";
}

function walls(height) {
  let radius = document.getElementById('carpetIn').value / 2;
  let circumference = 2 * Math.PI * radius;
  let wallArea = circumference * height;
  return wallArea;
}


// Solar Panel code

/*
"use strict";

function addMonths(elem){
let annualUseKw = 0;
let dailyUseKw = 0;

let i = 0;
let x = 0;

var months = document.getElementById(elem).getElementsByTagName('input');

  for(i=0; i<months.length; i++) {
      x = Number(months[i].value);
        annualUseKw += x;
  }
dailyUseKw = annualUseKw/365;
return dailyUseKw;
}

var dailyUseKw = addMonths('mpc');
jslint browser:true */


function dailyKwh() {
  let monthlyUse = document.getElementById('kwhIn').value;
  return monthlyUse * 12 / 365;
}

function sunHours() {
  let hrs;
  let theZone = document.getElementById('zoneIn').selectedIndex;
  theZone += 1;
  switch (theZone) {
      case 1:
          hrs = 6;
          break;
          console.log(hrs);
      case 2:
          hrs = 5.5;
      case 3:
          hrs = 5;
          break;
      case 4:
          hrs = 4.5;
          break;
      case 5:
          hrs = 4.2;
          break;
      case 6:
          hrs = 3.5;
          break;
      default:
          hrs = 0;
  }
  return hrs;

}

function calculatePanel() {
  let userChoice = document.getElementById('panelIn').selectedIndex;
  let panelOptions = document.getElementById('panelIn').options;
  let power = panelOptions[userChoice].value;
  let name = panelOptions[userChoice].text;
  let x = [power, name]
  return x;
}

function calculateSolar() {
  let dailyUseKw = dailyKwh();
  let sunHoursPerDay = sunHours();

  let minKwNeeds = dailyUseKw / sunHoursPerDay;
  let realKwNeeds = minKwNeeds * 1.25;

  let realWattNeeds = realKwNeeds * 1000;

  let panelInfo = calculatePanel();
  let panelOutput = panelInfo[0];
  let panelName = panelInfo[1];

  let panelsNeeded = Math.ceil(realWattNeeds / panelOutput);

  let feedback = "";
  feedback += "<p>Based on your average daily use of " + Math.round(dailyUseKw) + "kwh, you will need " + panelsNeeded + " " + panelName + " solar panels to offset 100% of your average daily electrical consumption.</p>";
  feedback += "<h2>Additional Details</h2>";
  feedback += "<p>Your average daily electicity consuption: " + Math.round(dailyUseKw) + " Kwh per day.</p>"
  feedback += "<p>Average sunshine hours per day: " + sunHoursPerDay + " hours.</p>"
  feedback += "<p>Realistic watts needed per hour: " + Math.round(realWattNeeds) + " watts/hour.</p>"
  feedback += "<p>The " + panelName + " panel you selected generates about " + panelOutput + " watts per hour.</p>"

  document.getElementById('solarRecommendation').innerHTML = feedback;

}