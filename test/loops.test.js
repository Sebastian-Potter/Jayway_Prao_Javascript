'use strict';

const loop = require('../src/loops/loops');
var chai = require('chai');
var assert = chai.assert;

describe('Test the function addText', function () {
  it('Comparing Strings...', function () {
    assert.equal(loop.addText(), "Jag Kan  Sätta Ihop En Array :)");
  })
});
describe('Test the function addText', function () {
  it('Comparing Strings...', function () {
    assert.equal(loop.findWhiteSpace("Ett Två Tre "), 3);
    assert.equal(loop.findWhiteSpace("Att skapa uppgifter för loopar var inte helt enkelt"), 8);
  })
});