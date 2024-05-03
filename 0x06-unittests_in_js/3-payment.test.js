const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')

describe("sendPaymentRequestToApi", function () {
    it("should use Utils.calculateNumber('SUM', ...)", function () {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
});
