// ───────────────────────────────────────────────────────
// Connected Campus · Static server for Railway
// Serves the single-file HTML app and supports ?tag= URLs
// for simulated NFC taps (e.g. /?tag=library-entrance).
// ───────────────────────────────────────────────────────

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set proper cache headers for the single HTML asset.
// During iteration you want NO caching so updates appear immediately.
// Once you're stable, you can change this to a longer max-age.
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Security headers — keep the app well-behaved
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});

// Serve static files from /public (where index.html lives)
app.use(express.static(path.join(__dirname, 'public'), {
  index: 'index.html',
  extensions: ['html']
}));

// Catch-all: any unknown route serves index.html
// This means /library, /reception, /?tag=anything all work
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Connected Campus running on port ${PORT}`);
});
