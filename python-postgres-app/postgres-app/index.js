const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

// GET all users
app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

// CREATE user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  res.json(result.rows[0]);
});

// UPDATE user
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await pool.query(
    'UPDATE users SET name = $1 WHERE id = $2',
    [name, id]
  );

  res.send('User updated');
});

// DELETE user
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query('DELETE FROM users WHERE id = $1', [id]);

  res.send('User deleted');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});