# IRPC — Islamic Research & Propagation Centre

Flagship homepage for IRPC: React + Vite, with English/Hindi/Urdu/Roman Urdu
support and a live "AI Da'ee" Q&A feature backed by the Claude API.

## Development

```bash
npm install
npm run dev
```

## AI Da'ee setup

The hero search box and the AI Da'ee chat panel call a serverless function at
`api/ask-daee.js` (Vercel Serverless Function), which uses `@anthropic-ai/sdk`
to answer questions with Claude.

This function only runs on Vercel (or `vercel dev` locally) — plain `npm run
dev` serves the frontend only, so `/api/ask-daee` will 404 in that mode.

To enable it:

1. Get an API key from https://console.anthropic.com/
2. In the Vercel project, go to **Settings → Environment Variables** and add:
   ```
   ANTHROPIC_API_KEY=<your key>
   ```
3. Redeploy. See `.env.example` for local reference.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run lint` — oxlint
