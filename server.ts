import express from 'express';
import path from 'node:path';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'araak-industry' });
});

app.post('/api/chat', async (_req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({ error: 'AI advisor requires GEMINI_API_KEY.' });
  }
  res.status(501).json({ error: 'AI endpoint is provided by the full project source.' });
});

app.post('/api/rfq', (_req, res) => {
  res.json({ ok: true, message: 'RFQ received.' });
});

if (process.env.NODE_ENV === 'production') {
  // Render starts the service from the repository root. Vite writes the
  // production client to dist/public, so resolving from process.cwd()
  // works consistently after server.ts is bundled to CommonJS.
  const publicDir = path.resolve(process.cwd(), 'dist', 'public');

  app.use(express.static(publicDir, { index: false }));

  app.get('/favicon.ico', (_req, res) => {
    res.redirect(308, '/favicon.svg');
  });

  app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(publicDir, 'index.html'), (error) => {
      if (error) next(error);
    });
  });
} else {
  app.get('/', (_req, res) => res.send('Run the Vite development server through the full project source.'));
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ARAAK Industry listening on ${PORT}`);
});
