'use strict';

const maths = require('../src/math/math');
var chai = require('chai');
var assert = chai.assert;


describe('Test the function addera', function () {
  it('Adderar...', function () {
    assert.equal(maths.addera(1,2), 3);
    assert.equal(maths.addera(13,37), 50);
  })
});
describe('Test the function subtrahera', function () {
  it('Subtraherar...', function () {
    assert.equal(maths.subtrahera(7,2), 5);
    assert.equal(maths.subtrahera(13,37), -24);
  })
});
describe('Test the function dividera', function () {
  it('Dividerar...', function () {
    assert.equal(maths.dividera(10,2), 5);
    assert.equal(maths.dividera(1337,7), 191);
  })
});
describe('Test the function multiplicera', function () {
  it('Multiplicerar...', function () {
    assert.equal(maths.multiplicera(5,5), 25);
    assert.equal(maths.multiplicera(13,37), 481);
  })
});
describe('Test the function rest', function () {
  it('Får ut resten...', function () {
    assert.equal(maths.rest(10,8), 2);
    assert.equal(maths.rest(24,9), 6);
  })
});
describe('Test the function distansOmvandling', function () {
  it('DistansOmvandlar...', function () {
    assert.equal(maths.distansOmvandling(73000,0.01), 730);
    assert.equal(maths.distansOmvandling(5, 10), 50);
  })
});
describe('Test the function auctionHouse', function () {
  it('kör auctionHouse...', function () {
    assert.equal(maths.auctionHouse(50,16,3), 2);
    assert.equal(maths.auctionHouse(100,16,3), 52);
  })
});