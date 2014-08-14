/* global describe, it, expect */

(function () {
  'use strict';

  var myLib = window.myLib;

  describe('#myLib library', function () {
    describe('#sum method', function () {
      it('should sumarize all given numbers', function () {
        expect(myLib.sum(1,2,3)).to.be.equal(6);
        expect(myLib.sum(5, 5, 10, 13)).to.be.equal(33);
        expect(myLib.sum(2 * 8, 3 * 9)).to.be.equal(43);
      });
    });
  });
})();
