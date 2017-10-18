'use strict';

const arr = require('../src/arrays/arrays');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function skapaArray1', function () {
  it('Comparing arrays...', function () {
    //assert.equal(arr.skapaArray1(), ["Ett", "Två", "Tre"]);
    var resp = arr.skapaArray1();

    assert.equal(3,resp.length);
    assert.equal("Ett",resp[0]);
    assert.equal("Två",resp[1]);
    assert.equal("Tre",resp[2]);
  })
});

describe('Test the function skapaArray2', function () {
  it('Comparing arrays...', function () {
    //assert.equal(arr.skapaArray1(), ["Ett", "Två", "Tre"]);
    var resp = arr.skapaArray2();

    assert.equal(3,resp.length);
    assert.equal(1,resp[0]);
    assert.equal(2,resp[1]);
    assert.equal(3,resp[2]);
  })
});

describe('Test the function arrayPlock', function () {
  it('Picking value from array...', function () {
    assert.equal(arr.arrayPlock([13, 37, 9001]), 13);
  })
});

describe('Test the function arrayPush', function () {
  it('Pushing value to array...', function () {
    var resp = arr.arrayPush(["Ein", "Zwei"],"Drei");

    assert.equal(3,resp.length);
    assert.equal("Ein",resp[0]);
    assert.equal("Zwei",resp[1]);
    assert.equal("Drei",resp[2]);
  })
});