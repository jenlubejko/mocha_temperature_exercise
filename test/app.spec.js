var assert = require('assert');

var functions = require('../app.js');

describe('Temperature Conversion', function () {
  describe('cToF', function () {
    it('should convert -40 celsius to -40 fahrenheit', function () {
      assert.equal(-40, functions.cToF(-40));
    });

    it('should convert 0 celsius to 32 fahrenheit', function () {
      assert.equal(32, functions.cToF(0));
    });

    it('should return undefined if no temperature is input', function () {
      assert.equal(undefined, functions.cToF(''));
    });
  });

  describe('fToC', function () {
    it('should convert -40 fahrenheit to -40 celsius', function () {
      assert.equal(-40, functions.fToC(-40));
    });
    it('should convert 32 fahrenheit to 0 celsius', function () {
      assert.equal(0, functions.fToC(32));
    });
    it('should return undefined if no temperature is input', function () {
      assert.equal(undefined, functions.fToC('a'));
    });
  });
});