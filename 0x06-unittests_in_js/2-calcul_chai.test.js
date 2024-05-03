const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe("calculateNumber", function () {
    it("sums up numbers when type is sum", function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it("subtract up numbers when type is subtract", function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it("divides up numbers when type is division", function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it("returns error when b is zero when type is division", function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
