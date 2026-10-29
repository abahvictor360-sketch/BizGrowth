# BizGrowth

Marketing site for BizGrowth: "Grow your business with smart digital solutions".
React + Vite, liquid-glass UI, Plus Jakarta Sans (display) + Inter (body).

## Pages
`/` Home · `/solutions` · `/pricing` · `/about` · `/contact` · `/login` · `/signup`

## Develop
```bash
npm install
npm run dev     # local dev server
npm run build   # production build to dist/
```

## Images
Team photos live in `src/assets/team/` as background-removed WebP cutouts
(processed with `rembg` / BiRefNet-portrait). Names and roles are placeholders in
`src/data/team.js`, so update them there.

## Deploy
Vercel: framework preset **Vite**, output `dist`. `vercel.json` rewrites all routes to
`index.html` so client-side routes work on refresh.

## Auth pages
`/login` and `/signup` are front-end only: they validate input and show success states, but no
account is created yet. Connect a backend (for example Supabase Auth) in `src/pages/Login.jsx`
and `src/pages/Signup.jsx` where the request is simulated.
