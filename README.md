# __PROJECT__-web

Next.js 16 · TypeScript · Tailwind CSS v4 · motion · lucide-react. English/French TIDEA website hosted on Vercel.

```bash
cp .env.example .env.local
npm install
npm run dev      # http://localhost:3000 (French: /fr)
npm run build
```

- Content: `messages/en.json`, `messages/fr.json`
- Brand colours: `app/globals.css` → `@theme { --color-brand-* }`
- Forms: standalone Cloudflare Worker in `../tidea-forms-worker`; Contact, Partnership and Newsletter submissions are emailed to `support@tidea-tech.com`
- Deploy: Vercel (import this repository and set the public form variables from `.env.example`)
