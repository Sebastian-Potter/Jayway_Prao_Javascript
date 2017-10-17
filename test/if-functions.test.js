'use strict';

const check = require('../src/if-functions/if-functions');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function checkBool', function () {
    it('Returnera "true"', function () {
        assert.equal(check.checkBool(true), "true");
    });
    it("Returnera 'false'",function () {
        assert.equal(check.checkBool(false), "false");
    })
});

describe('Test the function greetings', function () {
    it('Returnera "God dag"', function () {
        assert.equal(check.greetings(12), "God dag");
        assert(check.greetings(6) !== "God dag");
        assert(check.greetings(22) !== "God dag");
    });
    it("Returnera 'God morgon'",function () {
        assert.equal(check.greetings(6), "God morgon");
        assert(check.greetings(12) !== "God morgon");
        assert(check.greetings(22) !== "God morgon");
    });

    it("Returnera 'God kväll'",function () {
        assert.equal(check.greetings(22), "God kväll");
        assert(check.greetings(12) !== "God kväll");
        assert(check.greetings(6) !== "God kväll");
    })
});

describe('Test the function isValid', function () {
    it('Returnera true', function () {
        assert.equal(check.isValid(0), true);
        assert.equal(check.isValid(50), true);
        assert.equal(check.isValid(101), true);
        assert.equal(check.isValid(149), true);
    });
    it("Returnera false",function () {
        assert.equal(check.isValid(1), false);
        assert.equal(check.isValid(161), false);
        assert.equal(check.isValid(80), false);
    })
});