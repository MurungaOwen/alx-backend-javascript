const {expect} = require('chai');
const request = require('request');
const { response } = require('./api');

describe('correct API working', () => {
    it('returns correct status code', (done) => {
        request
            .get('http://localhost:7865/')
            .on('response', (response) => {
                expect(response.statusCode).to.be.equal(200);
            });
            done();
    });

    it('gives Correct result `Welcome to the payment system`', (done) => {
        request.get('http://localhost:7865/', function(error, response, body) {
                if (error) return done(error);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
    });
});

describe('Payment endpoint', () => {
    it('returns correct status code when id is number', (done) => {
        request
            .get('http://localhost:7865/2')
            .on('response', (response) => {
                expect(response.statusCode).to.be.equal(200);
            });
            done();
    });

    it('returns correct status code when id is not number', (done) => {
        request
            .get('http://localhost:7865/a')
            .on('response', (response) => {
                expect(response.statusCode).to.be.equal(404);
            });
            done();
    });
});

describe('login endpoint', () => {
    it('returns correct status', (done) => {
        request
            .post('http://localhost:7865/login', {formData: {'userName': 'Murunga'}})
            .on('response', (response) => {
                expect(response.statusCode).to.be.equal(200)
            });
            done();
    });
});

describe('available payments', () => {
    it('gives Correct result ', (done) => {
        request.get('http://localhost:7865/available_payments', function(error, response, body) {
                if (error) return done(error);
                expect(body)
                    .to.deep
                    .equal({"payment_methods":{"credit_cards":true,"paypal":false}});
                done();
            });
    });

});
