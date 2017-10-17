'use strict';

const calc = require('../src/basic-functions/basic-functions');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function roundUp', function () {
    it('Skall avrunda upp', function () {
        assert.equal(calc.roundUp(12.6), 13);
        assert.equal(calc.roundUp(5.3), 6);
    })
});

describe('Test the function roundUp', function () {
    it('Skall avrunda ner', function () {
        assert.equal(calc.roundDown(12.6), 12);
        assert.equal(calc.roundDown(5.8), 5);
    })
});

describe('Test the function roundUp', function () {
    it('Skall avrunda till närmast heltal ', function () {
        assert.equal(calc.round(12.6), 13);
        assert.equal(calc.round(5.8), 6);
        assert.equal(calc.round(15.2), 15);
        assert.equal(calc.round(20.3), 20);
    })
});

describe('Test the function getStringlength', function () {
    it('Ska ge längten på text strängen ', function () {

        assert.equal(calc.getStringLength("abcd"), 4);
        assert.equal(calc.getStringLength("längdenpåsträngen"), 17);
        assert.equal(calc.getStringLength(""), 0);
    })
});

describe('Test the function getFirstLetter', function () {
    it('Ska ge den första bokstaven', function () {

        assert.equal(calc.getFirstLetter("abcd"), "a");
        assert.equal(calc.getFirstLetter("längdenpåsträngen"), "l");
        assert.equal(calc.getFirstLetter("b"), "b");
    })
});

describe('Test the function getIndexOfquestionMark', function () {
    it('Ska ge positionen av frågateknet i text strängen ', function () {

        assert.equal(calc.getIndexOfQuestionMark("abcd"), -1);
        assert.equal(calc.getIndexOfQuestionMark("längdenpåsträngen?"), 17);
        assert.equal(calc.getIndexOfQuestionMark(""), -1);
    })
});

describe('Test the function isEqual', function () {
    it('Ska avgöra om de två strängran är likadana  ', function () {

        assert.equal(calc.isEqual("abcd", "abcd"), true);
        assert.equal(calc.isEqual("längd", "land"), false);
    })
});

describe('Test the function isOdd', function () {
    it('Ska avgöra om talet är en udda', function () {

        assert.equal(calc.isOdd(2), false);
        assert.equal(calc.isOdd(5), true);
    })
});

describe('Test the function isEven', function () {
    it('Ska avgöra om talet är en heltal', function () {

        assert.equal(calc.isEven(2), true);
        assert.equal(calc.isEven(5), false);
    })
});