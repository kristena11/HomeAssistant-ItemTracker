import chai from 'chai';
import { db, initializeDatabase, clearDatabase } from '../db/db.js';

const { expect } = chai; 

describe('Database setup', () => {
  beforeEach((done) => {
    clearDatabase();
    initializeDatabase(); 
    done();
  });

  it('should have items table with sample data', (done) => {
    db.all('SELECT * FROM items', (err, rows) => {
      if (err) {
        throw err;
      }

      console.log(rows); 

      expect(rows).to.deep.equal([
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
        { id: 3, name: 'Item C' },
      ]);
      
      done();
    });
  });
});