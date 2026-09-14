# Mohammed Ali — Portfolio

A Next.js 14 (App Router) + React + Tailwind CSS portfolio built from the
public repositories on [github.com/Mo-Ma-Ali](https://github.com/Mo-Ma-Ali).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

The fastest path is [Vercel](https://vercel.com/new): push this folder to a
GitHub repo and import it — no configuration needed. It also works on
Netlify, Cloudflare Pages, or any Node host that supports Next.js.

## What to customize before publishing

The content is real (sourced from your pinned repos), but a few things are
placeholders you should fill in:

- **`components/Contact.tsx`** — swap `your-email@example.com` and the
  LinkedIn placeholder for your real links.
- **`components/About.tsx`** — the third paragraph is a placeholder for what
  you're currently looking for (job, research, freelance work).
- **`data/projects.ts`** — the `summary`/`detail` text for each project is a
  reasonable starting description based on the repo name and language, since
  GitHub's profile page doesn't expose full READMEs. Replace with your own
  write-up, and add real screenshots/demo links if you have them.
- **Repository count / stack mix** in `components/Hero.tsx` — update if your
  repo list has changed since this was built.

## Structure

```
app/            Next.js App Router pages, layout, global styles
components/     Nav, Hero, Projects, About, Skills, Contact
data/projects.ts  Project content — edit here to add/remove projects
```

## Design notes

Dark ink background, a serif display face (Fraunces) for headlines against
IBM Plex Sans for body copy, and IBM Plex Mono reserved for actual code-ish
labels (language/stack tags). Projects are listed with hairline dividers
rather than a grid of identical cards, and the hero's right-hand panel reads
like an instrument readout rather than a decorative stat block.
