# Single‑Page Portfolio with Nextra

This project provides a minimal template for a single‑page portfolio website
powered by **Nextra** and **Next.js**. It’s designed for deployment on GitHub
Pages (or any static hosting provider) via a static export.

## Features

- **Nextra Docs Theme**: Simple yet flexible layout powered by the Nextra Docs
  theme.
- **Static Export**: Next.js is configured to export the site to static HTML
  under the `out` directory, suitable for GitHub Pages.
- **MDX Content**: Write your page content using Markdown/MDX with React
  components if desired.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. View the site at <http://localhost:3000>.

## Building and Deploying

To build and export the site for deployment:

```bash
npm run export
```

This command builds the site and generates static files into the `out`
directory. Commit the contents of `out/` to the `gh-pages` branch (or follow
GitHub’s recommended workflow) to host your site via GitHub Pages.

For automated deployments, you can configure a GitHub Action similar to the
following (adjust paths and branch names as needed):

```yaml
 name: Deploy Nextra to GitHub Pages

 on:
   push:
     branches: ["main"]
   workflow_dispatch:

 jobs:
   build:
     runs-on: ubuntu-latest
     steps:
       - uses: actions/checkout@v3
       - uses: actions/setup-node@v3
         with:
           node-version: 18
       - run: npm install
       - run: npm run export
       - uses: actions/upload-pages-artifact@v1
         with:
           path: out

   deploy:
     runs-on: ubuntu-latest
     needs: build
     permissions:
       pages: write
       id-token: write
     environment:
       name: github-pages
       url: ${{ steps.deployment.outputs.page_url }}
     steps:
       - id: deployment
         uses: actions/deploy-pages@v1
```

## Customization

Edit `pages/index.mdx` to add your own content. Adjust the
`theme.config.js` file to customize the site’s logo, project link, and footer.

Enjoy building your portfolio!
