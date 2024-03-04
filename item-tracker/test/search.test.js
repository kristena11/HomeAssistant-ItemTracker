import chai from 'chai';
import chaiHttp from 'chai-http';
import { initializeDatabase, clearDatabase } from '../db/db.js';
import { app } from '../app.js'; 
const { expect } = chai;

chai.use(chaiHttp);

describe('Search Route', () => {
  beforeEach((done) => {
    clearDatabase();
    initializeDatabase();
    done();
  });

  it('should return items matching the keyword', (done) => {
    chai.request(app)
      .get('/search/Item')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.items).to.be.an('array');
        expect(res.body.items).to.have.lengthOf(3);
        done();
      });
  });
});