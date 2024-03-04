import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

function initializeDatabase() {
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS items (id INT, name TEXT)');

    const stmt = db.prepare('INSERT INTO items VALUES (?, ?)');
    stmt.run(1, 'Item A');
    stmt.run(2, 'Item B');
    stmt.run(3, 'Item C');
    stmt.finalize();
  });
}

function clearDatabase() {
  db.serialize(() => {
    db.run('DROP TABLE IF EXISTS items');
  });
}

export { db, initializeDatabase, clearDatabase };