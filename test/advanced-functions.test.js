'use strict';

const calc = require('../src/advanced-functions/statistic');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function descriptiveStatistics', function () {
    it('descriptiveStatistics([1, 5, 7, 8]) should return {maximum: 8,mean: 5.25,median: 6,minimum: 1,range: 7}', function () {
        assert.deepEqual(calc.descriptiveStatistics([1, 5, 7, 8]), {maximum: 8,mean: 5.25,median: 6,minimum: 1,range: 7});
    });
    it('descriptiveStatistics([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return {maximum: 5,mean: 1.5,median: 5,minimum: -2,range: 7}', function () {
        assert.deepEqual(calc.descriptiveStatistics([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]), {maximum: 5,mean: 1.5,median: 5,minimum: -2,range: 7});
    });
    it('descriptiveStatistics([-42, -84, -2, -3]) should return {maximum: -2,mean: -32.75,median: -43,minimum: -84,range: 82})', function () {
        assert.deepEqual(calc.descriptiveStatistics([-42, -84, -2, -3]), {maximum: -2,mean: -32.75,median: -43,minimum: -84,range: 82});
    })
});

describe('Test the function maximum', function () {
    it('maximum([1, 5, 7, 8]) should return 8', function () {
        assert.equal(calc.maximum([1, 5, 7, 8]), 8);
    });
    it('maximum([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return 5', function () {
        assert.equal(calc.maximum([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]), 5);
    });
    it('maximum([-42, -84, -2, -3]) should return -2', function () {
        assert.equal(calc.maximum([-42, -84, -2, -3]), -2);
    })
});

describe('Test the function mean', function () {
    it('mean([1, 5, 7, 8]) should return 5.25', function () {
        assert.equal(calc.mean([1, 5, 7, 8]), 5.25);
    });
    it('mean([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return 1.5', function () {
        assert.equal(calc.mean([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]), 1.5);
    });
    it('mean([-42, -84, -2, -3]) should return -32.75', function () {
        assert.equal(calc.mean([-42, -84, -2, -3]), -32.75);
    })
});

describe('Test the function median', function () {
    it('median([1, 5, 7, 8]) should return 6', function () {
        assert.equal(calc.median([1, 5, 7, 8]), 6);
    });
    it('median([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return 5)', function () {
        assert.equal(calc.median([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]), 5);
    });
    it('median([-42, -84, -2, -3]) should return -43', function () {
        assert.equal(calc.median([-42, -84, -2, -3]), -43);
    })
});

describe('Test the function minimum', function () {
    it('minimum([1, 5, 7, 8]) should return 1', function () {
        assert.equal(calc.minimum([1, 5, 7, 8]), 1);
    });
    it('minimum([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return -2', function () {
        assert.equal(calc.minimum([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]), -2);
    });
    it('minimum([-42, -84, -2, -3]) should return -84', function () {
        assert.equal(calc.minimum([-42, -84, -2, -3]), -84);
    })
});

describe('Test the function range', function () {
    it('minimum([1, 5, 7, 8]) should return 1', function () {
        assert.equal(calc.range([1, 5, 7, 8]), 7);
    });
    it('minimum([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]) should return -2', function () {
        assert.equal(calc.range([-2, 5, 1, 1, 5, 5, 2, -2, 2, -2]), 7);
    });
    it('minimum([-42, -84, -2, -3]) should return -84', function () {
        assert.equal(calc.range([-42, -84, -2, -3]), 82);
    })
});