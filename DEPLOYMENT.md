# ARAAK Industry — Deployment

This repository is configured for full-stack deployment.

- Runtime: Node.js 22
- Build: `npm install && npm run build`
- Start: `npm start`
- Health check: `/api/health`
- CI: `.github/workflows/ci.yml`
- Hosting blueprint: `render.yaml`

## Runtime secrets

- `GEMINI_API_KEY` — required by the AI Advisor
- `GOOGLE_MAPS_PLATFORM_KEY` — optional, for Google Maps integration
