var expect = require('chai').expect;
var challenge2Page = require('../pageObjects/challenge2.page');

describe('Mindera QA Graduate Challenge 2:', function () {

    beforeEach(function () {
        challenge2Page.open();
    });

    it('Shoot all the bubbles that showed up after waiting 5 seconds', function () {
        browser.pause(5000);
        var count = challenge2Page.bulle.length;
        challenge2Page.bulle.click()
        expect(challenge2Page.score).to.be.equal(count)
    });
});
