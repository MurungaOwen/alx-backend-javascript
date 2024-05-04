const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './blabla.csv';

const app = require('./server')

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {
  describe('When the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    })
    it('Returns the right error message', (done) => {
      chai.request(app)
        .get('/students')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`Cannot load the database`);
          done();
        });
    });
  });
});