const {expect} = require('chai');
const request = require('request');

describe('correct API working', () => {
    it('returns correct status code', () => {
        request
            .get('http://localhost:7865/')
            .on('response', (response) => {
                expect(response.statusCode).to.be.equal(200);
            });
    });

    it('gives Correct result `Welcome to the payment system`', (done) => {
        request.get('http://localhost:7865/', function(error, response, body) {
                if (error) return done(error);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
    });
});
