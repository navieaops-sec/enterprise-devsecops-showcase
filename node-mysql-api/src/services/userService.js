const db = require('../db/mysql');

async function fetchUsers() {
  const [rows] = await db.query('SELECT id, name, email FROM users');
  return rows;
}

module.exports = { fetchUsers };