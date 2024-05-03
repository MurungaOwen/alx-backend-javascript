const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function () {
    it("sums up numbers when type is sum", function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it("subtract up numbers when type is subtract", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it("divides up numbers when type is division", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it("returns error when b is zero when type is division", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

});
