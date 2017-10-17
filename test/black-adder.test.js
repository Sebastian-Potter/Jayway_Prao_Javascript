'use strict';

const calc = require('../src/black-adder');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function addNumbers', function () {
    it('should return 42', function () {
        assert.equal(calc.add(21,21),42);
        assert.equal(calc.add(1,2,3,4),10);
    })
});