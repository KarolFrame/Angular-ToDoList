const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Asegúrate de tener node-fetch instalado
const app = express();

app.use(cors());
app.use(express.json());

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDxrCXWwtr1tl01Bw4pPYT1mtnUrQYG2Qd8MXBonjdE1AkBJCp-ntD1Zsc2yZH3vEZ/exec';

console.log("Arrancando proxy en http://localhost:3000...");

// ---------------------- LISTS ----------------------

// GET lists
app.get('/api/lists', async (req, res) => {
  try {
    const response = await fetch(`${SCRIPT_URL}?action=lists`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST lists
app.post('/api/lists', async (req, res) => {
  try {
    const response = await fetch(`${SCRIPT_URL}?action=lists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- TASKS ----------------------

// GET tasks
app.get('/api/tasks', async (req, res) => {
  try {
    let url = `${SCRIPT_URL}?action=tasks`;
    if (req.query.list) url += `&list=${encodeURIComponent(req.query.list)}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST tasks
app.post('/api/tasks', async (req, res) => {
  try {
    const response = await fetch(`${SCRIPT_URL}?action=tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- START SERVER ----------------------
app.listen(3000, () => {
  console.log('Proxy corriendo en http://localhost:3000');
});
