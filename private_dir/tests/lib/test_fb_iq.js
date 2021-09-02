const fb_iq = require('../../lib/fb_iq');
const assert = require('assert');


describe( "Calc Gain Loss Test...", () => {
    it("Starting -45, Ending -48", () => {
        assert.equal(3, fb_iq.calcGainLoss(-45, -48));
    });
    it("Starting -45, Ending 49", () => {
        assert.equal(6, fb_iq.calcGainLoss(-45, 49));
    })
    it("Starting -40, Ending 25", () => {
        assert.equal(35, fb_iq.calcGainLoss(-40, 25));
    })

    it("Starting -45, Ending -40", () => {
        assert.equal(-5, fb_iq.calcGainLoss(-45, -40));
    })

    it("Starting 45, Ending 44", () => {
        assert.equal(1, fb_iq.calcGainLoss(45, 44));
    })

    it("Starting 45, Ending 49", () => {
        assert.equal(-4, fb_iq.calcGainLoss(45, 49));
    })

    it("Starting 5, Ending 6", () => {
        assert.equal(-1, fb_iq.calcGainLoss(5, 6));
    })

    it("Starting 45, Ending -44", () => {
        assert.equal(-11, fb_iq.calcGainLoss(45, -44));
    })
});

describe( "Calc New Down & Dist...", () => {
    it("1st, 10, +4", () => {
        let result = fb_iq.calcNewDownDist(1, 10, 4);
        assert(2, result['down']);
        assert(6, result['dist']);
    })

    it("2nd, 5, -5", () => {
        let result = fb_iq.calcNewDownDist(2, 5, -5);
        assert(3, result['down']);
        assert(10, result['dist']);
    })

    it("4th, 1, +4", () => {
        let result = fb_iq.calcNewDownDist(4, 1, 4);
        assert(1, result['down']);
        assert(10, result['dist']);
    })

    it("3rd, 1, +2", () => {
        let result = fb_iq.calcNewDownDist(3, 1, 2);
        assert(1, result['down']);
        assert(10, result['dist']);
    })

    it("3rd, 1, -2", () => {
        let result = fb_iq.calcNewDownDist(3, 1, -2);
        assert(4, result['down']);
        assert(3, result['dist']);
    })

    it("3rd, 1, 1", () => {
        let result = fb_iq.calcNewDownDist(3, 1, 1);
        assert(1, result['down']);
        assert(10, result['dist']);
    })
})
