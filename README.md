# wART Radio – Demo Website v2.1

A clean, modern demo site for wART FM Radio (Marshall, NC). Built to show what a new wartfm.org could look like—simple, secure, and easy to maintain. Warm, community-focused design.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Serve with `npm run preview` to test.

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `WART-v2` or `wartfm`)
2. Push this project
3. In repo Settings → Pages, set source to **GitHub Actions**
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build:gh
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

5. After the first push, the site will be at `https://<username>.github.io/WART-v2/`

**Note:** The `build:gh` script uses base path `/WART-v2/`. If your repo has a different name, update the `--base` flag in `package.json`.

## Project Structure

- `src/pages/` – Page content (Astro components)
- `src/layouts/BaseLayout.astro` – Shared header, footer, nav
- `public/css/style.css` – Styles
- `docs/PLAN.md` – Modernization plan and rationale

## Updating Content

Edit the `.astro` files in `src/pages/`. For example:
- Home: `src/pages/index.astro`
- Program schedule: `src/pages/program-schedule/index.astro`
- News: `src/pages/news/index.astro`

No build tools expertise needed beyond editing text and pushing to Git.
