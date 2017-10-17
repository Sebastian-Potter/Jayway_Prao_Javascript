'use strict';

// run tests with 'npm test'

var sc = require("./src/black-adder");
var result = sc.add(1, 2, 3);

// Test the sum-function here

// Print the result to the terminal (console)
console.log(result);

var test = require("./src/if-functions/if-functions");

test.checkNumber(87, 1000);