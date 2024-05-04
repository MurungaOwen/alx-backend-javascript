const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

const app = require('./server');

chai.use(chaiHttp);
chai.should();

describe('full HTTP server using Express', () => {
  describe('/students/:major endpoint', () => {
    describe('when the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('returns the right content', () => new Promise((done) => {
        chai.request(app)
          .get('/students/SWE')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.equal('List: Guillaume, Joseph, Paul, Tommy');
            done();
          });
      }));
    });
  });
});

describe('full HTTP server using Express', () => {
  describe('when the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('returns the right error message', () => new Promise((done) => {
      chai.request(app)
        .get('/students')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Cannot load the database');
          done();
        });
    }));
  });
});
