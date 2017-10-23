'use strict';

// Uppgift 1
function addText() {
  var text = ["Jag ", "Kan ", " Sätta ", "Ihop ", "En ", "Array ", ":)"];
  var svarText = "";


  return svarText;
}

// Uppgift 2
function findWhiteSpace(text) {
  var svarText = "";

  return svarText;
}

/**
 * För över innehållet i arrayen info till Objecten person.
 * @param info
 * @returns {{first_name: string, last_name: string, age: number, address: string}}
 */
function buildObject(info) {
    var person = {
      first_name: "",
      last_name: "",
      age: 0,
      address: ""
    };

    // Your Code goes here


    return person;
}

/**
 * Take the array numbers and count the sum of the numbers
 * @param numbers
 */
function countSum(numbers) {
  // Your code here

}

// Exports
exports.addText = addText();
exports.buildObject = buildObject;
exports.findWhiteSpace = findWhiteSpace;
exports.countSum = countSum;