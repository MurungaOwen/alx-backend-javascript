const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')

describe("sendPaymentRequestToApi", function() {
    it("should use stub to always return 10", function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberStub.restore();
    });

    it('should log message `The total is: 10`', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.alwaysReturned('The total is: 10'));
        calculateNumberSpy.restore();
    })

});
