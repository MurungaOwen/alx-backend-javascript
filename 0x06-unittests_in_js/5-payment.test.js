const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('Testing send payment', function() {
    describe('sendPaymentRequestToAPI with 100, and 20', function() {
        it('calls sendPaymentRequestToAPI with 100, and 20', function() {
            const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
            sendPaymentRequestToApi(100, 20);
    
            expect(sendPaymentSpy.calledOnceWith("SUM", 100, 20))
                .to.be.true;
            sendPaymentSpy.restore();
        });
        it('returned 120 for args 100 and 20', function() {
            const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
            sendPaymentRequestToApi(100, 20);
            expect(sendPaymentSpy.alwaysReturned(120)).to.be.true;
            sendPaymentSpy.restore();
        });

    });

    describe('sendPaymentRequestToAPI with 10, and 10', function() {
        it('calls sendPaymentRequestToAPI with 10, and 10', function() {
            const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
            sendPaymentRequestToApi(10, 10);
    
            expect(sendPaymentSpy.calledOnceWith("SUM", 10, 10))
                .to.be.true;
            sendPaymentSpy.restore()
        });

        it('returned 120 for args 100 and 20', function() {
            const sendPaymentSpy = sinon.spy(Utils, 'calculateNumber');
            sendPaymentRequestToApi(10, 10);
            expect(sendPaymentSpy.alwaysReturned(20)).to.be.true;
            sendPaymentSpy.restore()
        });

    });
});
