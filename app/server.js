// app/server.js
const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Secret injected at runtime (from Vault via Jenkins/Docker env)
const SITE_SECRET = process.env.SITE_SECRET || 'dev-default-secret';

// Region/host info (simulate grouping by region)
const REGION = process.env.REGION || 'Maharashtra';
const HOSTNAME = process.env.HOSTNAME || os.hostname();

app.get('/', (req, res) => {
  res.send(`<h1>Simple Obf App</h1>
    <p>Host: ${HOSTNAME}</p>
    <p>Region: ${REGION}</p>
    <p><a href="/status">/status</a></p>`);
});

app.get('/status', (req, res) => {
  // A tiny payload that includes the secret and status
  res.json({
    host: HOSTNAME,
    region: REGION,
    uptimeSeconds: process.uptime(),
    secret: SITE_SECRET,     // what we will protect in production
    available: true
  });
});

app.listen(PORT, () => {
  console.log(`Simple Obf App listening on port ${PORT}`);
});
