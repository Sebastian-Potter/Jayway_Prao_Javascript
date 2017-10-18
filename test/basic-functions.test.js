'use strict';

const calc = require('../src/basic-functions/basic-functions');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function roundUp', function () {
    it('roundUp(12.6) should return 13', function () {
        assert.equal(calc.roundUp(12.6), 13);
    });
    it('roundUp(5.3) should return 6', function () {
        assert.equal(calc.roundUp(5.3), 6);
    })
});

describe('Test the function roundDown', function () {
    it('roundDown(12.6) should return 12', function () {
        assert.equal(calc.roundDown(12.6), 12);
    });
    it('roundDown(5.8) should return 5', function () {
        assert.equal(calc.roundDown(5.8), 5);
    })
});

describe('Test the function round', function () {
    it('round(12.6) should return 13', function () {
        assert.equal(calc.round(12.6), 13);
    });
    it('round(5.8) should return 6 ', function () {
        assert.equal(calc.round(5.8), 6);
    });
    it('round(15.2) should return 15 ', function () {
        assert.equal(calc.round(15.2), 15);
    });
    it('round(20.3) should return 20 ', function () {
        assert.equal(calc.round(20.3), 20);
    })
});

describe('Test the function getStringlength', function () {
    it('getStringLength("abcd") should return 4 ', function () {
        assert.equal(calc.getStringLength("abcd"), 4);
    });
    it('getStringLength("längdenpåsträngen") should return 17 ', function () {
        assert.equal(calc.getStringLength("längdenpåsträngen"), 17);
    });
    it('getStringLength("") should return 0 ', function () {
        assert.equal(calc.getStringLength(""), 0);
    })
});

describe('Test the function getFirstLetter', function () {
    it('getFirstLetter("abcd") should return "a"', function () {
        assert.equal(calc.getFirstLetter("abcd"), "a");
    });
    it('getFirstLetter("längdenpåsträngen") should return "l"', function () {
        assert.equal(calc.getFirstLetter("längdenpåsträngen"), "l");
    });
    it('SgetFirstLetter("b") should return "b"', function () {
        assert.equal(calc.getFirstLetter("b"), "b");
    })

});

describe('Test the function getIndexOfquestionMark', function () {
    it('getIndexOfQuestionMark("abcd") should return -1) ', function () {
        assert.equal(calc.getIndexOfQuestionMark("abcd"), -1);
    });
    it('getIndexOfQuestionMark("längdenpåsträngen?") should return 17 ', function () {
        assert.equal(calc.getIndexOfQuestionMark("längdenpåsträngen?"), 17);
    });
    it('getIndexOfQuestionMark("") should return -1 ', function () {
        assert.equal(calc.getIndexOfQuestionMark(""), -1);
    })
});

describe('Test the function isEqual', function () {
    it('isEqual("abcd", "abcd") should return true ', function () {
        assert.equal(calc.isEqual("abcd", "abcd"), true);
    });
    it('isEqual("längd", "land") should return false ', function () {
        assert.equal(calc.isEqual("längd", "land"), false);
    })
});

describe('Test the function isOdd', function () {
    it('isOdd(2) should return false', function () {
        assert.equal(calc.isOdd(2), false);
    });
    it('isOdd(5) should return true', function () {
        assert.equal(calc.isOdd(5), true);
    })
});

describe('Test the function isEven', function () {
    it('isEven(2) should return true', function () {
        assert.equal(calc.isEven(2), true);
    });
    it('Ska avgöra om talet är en heltal', function () {
        assert.equal(calc.isEven(5), false);
    })
});