'use strict';

const vars = require('../src/variables/variables');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function variables', function () {
    it('Should return 3 variables', function () {
        assert(Number.isInteger( vars.number), "Check if the variable number holds a number");
        assert(typeof (vars.string) === "string", "Check if the variable string holds a string");
        assert(typeof (vars.numberString) === "string", "Check if the variable numberString holds a string");
    })
});