# Running and publishing NITCOM

## Requirements

- Node.js 22 or newer
- npm (included with Node.js)

## Run locally

```bash
git clone https://github.com/guptam1989/polished-web-magic-25.git
cd polished-web-magic-25
npm install
npm run dev
```

Open the URL printed by Vite, normally <http://localhost:5173/>.

## Production build

```bash
npm run build
```

## GitHub Pages build

```bash
npm run build:pages
```

The static website is written to `dist-pages/`.

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes the
website after every push to `main`.

In the GitHub repository, open **Settings > Pages** and set **Source** to
**GitHub Actions**. Then open **Actions** and run **Deploy website to GitHub
Pages**, or push a new commit to `main`.

Published URL: <https://guptam1989.github.io/polished-web-magic-25/>
