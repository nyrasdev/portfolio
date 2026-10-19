# nyras.dev

Fer's portfolio. Vite + React, with React Bits components (Dither, DecryptedText, SpotlightCard, Dock) in `src/components`.

## Run it
```bash
npm install
npm run dev
```

## Edit content
Everything you'd change (links, projects, achievements) is at the top of `src/App.jsx`.
Colors and fonts are the tokens at the top of `src/index.css`.

## Deploy
1. Push this folder to a GitHub repo
2. Vercel → Add New Project → import the repo (it detects Vite automatically)
3. Project → Settings → Domains → add `nyras.dev`, then copy the DNS records Vercel shows into wherever you bought the domain
