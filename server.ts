import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  const publicDir = path.resolve(__dirname, 'public');
  app.use(express.static(publicDir));
  app.get('*', (_req, res) => res.sendFile(path.join(publicDir, 'index.html')));
} else {
  app.get('/', (_req, res) => res.send('Run the Vite development server through the full project source.'));
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ARAAK Industry listening on ${PORT}`);
});
