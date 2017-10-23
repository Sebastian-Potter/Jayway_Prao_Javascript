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

describe('Test the function buildObject', function () {
  var info = ["Andras","Balla",26,"home"];
  var object = {
    first_name: "Andras",
    last_name: "Balla",
    age: 26,
    address: "home"
  };
    it('Comparing Object', function () {
        assert.deepEqual(loop.buildObject(info),object);
    });

    info = ["Sebastian","Potter",24,"home"];
    object = {
        first_name: "Sebastian",
        last_name: "Potter",
        age: 24,
        address: "home"
    };

    it('Comparing Object', function () {
        assert.deepEqual(loop.buildObject(info),object);
    });
});

describe('Test the function countSum', function () {
    var info = [1,2,3,4,56,78,90,34];
    it('Counting Sum', function () {
        assert.equal(loop.countSum(info),268);
    });

    info = [1,1,1,1,1,1,1,1,1,1];

    it('Counting sum', function () {
        assert.equal(loop.countSum(info), 10);
    });
});