# GitHub Pages deployment plan: replace `vincic/vincic.github.io`

## Purpose

Move the new Astro-based `sasha.vincic.org` site to GitHub and have GitHub Pages deploy it automatically, replacing the current Jekyll code and deployment in `https://github.com/vincic/vincic.github.io`.

## Current state

- New site source lives in GitLab repo: `git@gitlab.skabersjovillan.com:sasha/sasha.vincic.org.git`.
- Current working branch: `hermes/astro-hemingway-personal`.
- Existing GitHub Pages repo: `git@github.com:vincic/vincic.github.io.git`.
- Existing GitHub repo is a Jekyll site on `master` with:
  - `_posts/`
  - `_layouts/`
  - `_config.yml`
  - `Gemfile`
  - `CNAME`
- New Astro repo already has:
  - `npm run build`
  - `astro.config.mjs` with `site: 'https://sasha.vincic.org'`
  - `public/CNAME` with `sasha.vincic.org`

## Scope order

Before replacing the GitHub Pages deployment, finish the archive-first cleanup:

- archived posts stay buildable at their direct URLs,
- archived posts are excluded from Blog, tag pages, homepage, and RSS,
- no consolidation redirects are required for the first GitHub Pages migration,
- article consolidation starts only after the new Astro site is live.

## Recommended approach

Use `vincic/vincic.github.io` as the canonical GitHub Pages source repository for the new Astro site.

Replace the old Jekyll source with the Astro source, then deploy with GitHub Actions to GitHub Pages using the official Pages artifact workflow.

This keeps the public Pages URL and custom domain behavior tied to the existing GitHub Pages repository, while replacing the implementation.

## Deployment architecture

```text
vincic/vincic.github.io
  main or master branch
    Astro source code
    public/CNAME
    .github/workflows/deploy.yml
      npm ci
      npm run build
      upload ./dist as Pages artifact
      deploy to GitHub Pages

GitHub Pages
  source: GitHub Actions
  custom domain: sasha.vincic.org
```

## Decisions to make before implementation

1. **Branch name**
   - Current GitHub repo uses `master`.
   - Lowest-risk option: keep `master` to avoid branch-setting churn.
   - Cleaner option: rename to `main`, then update GitHub default branch and workflow triggers.
   - Recommendation: keep `master` for this migration; rename later if desired.

2. **Repository relationship**
   - Option A: Copy/migrate the Astro source into `vincic/vincic.github.io` and make GitHub the deployment repo.
   - Option B: Keep GitLab as canonical and mirror/push to GitHub.
   - Recommendation: for GitHub Pages simplicity, push Astro source directly to `vincic/vincic.github.io`. Keep GitLab as working mirror only if useful.

3. **Old Jekyll history**
   - Option A: preserve GitHub history and replace files in one commit.
   - Option B: orphan branch / force-replace history.
   - Recommendation: preserve history and replace files in one migration commit.

## Implementation steps

### 1. Create a local migration checkout

On `my-dev`:

```bash
rm -rf /tmp/vincic.github.io-migration
git clone git@github.com:vincic/vincic.github.io.git /tmp/vincic.github.io-migration
cd /tmp/vincic.github.io-migration
git status --short --branch
```

### 2. Create a migration branch

```bash
git checkout -b astro-pages-migration
```

### 3. Remove old Jekyll source files

Remove old Jekyll/theme files, but keep `.git/`.

Candidate removals:

```bash
rm -rf \
  _includes _layouts _plugins _posts \
  stylesheets javascripts internet-of-things \
  Gemfile Gemfile.lock _config.yml theme-setup.md \
  blog.html feed.xml tags.html params.json \
  404.md about.md index.html
```

Keep or replace:

- `CNAME` should remain, but new Astro also has `public/CNAME`.
- `LICENSE` should be replaced by the new CC BY 4.0 license.
- `images/` can be replaced by `public/images/` from Astro source.

### 4. Copy Astro source into GitHub checkout

From the GitLab/Astro checkout:

```bash
rsync -a --delete \
  --exclude .git \
  --exclude node_modules \
  --exclude dist \
  --exclude .astro \
  /home/sasha/projects/sasha/sasha.vincic.org/ \
  /tmp/vincic.github.io-migration/
```

Important: do not copy build artifacts or local dependency folders.

### 5. Add GitHub Actions Pages workflow

Implemented in this repo as `.github/workflows/deploy.yml`. It builds pull requests without deploying, and deploys pushes to `master` once this source is copied to `vincic/vincic.github.io`.

Workflow content:

```yaml
name: Deploy Astro site to GitHub Pages

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload Pages artifact
        if: github.event_name != pull_request
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    if: github.event_name != pull_request
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

If we decide to rename the branch to `main`, change `branches: [master]` to `branches: [main]`.

### 6. Verify locally before pushing

In `/tmp/vincic.github.io-migration`:

```bash
npm ci
npm run build
test -f dist/CNAME
grep -R "sasha.vincic.org" dist/CNAME dist/sitemap-index.xml dist/rss.xml
```

Optional preview:

```bash
npm run preview -- --host 0.0.0.0
curl -I http://localhost:4321/
curl -I http://localhost:4321/blog/
```

### 7. Commit and push migration branch

```bash
git status --short
git add -A
git commit -m "Replace Jekyll site with Astro site"
git push -u origin astro-pages-migration
```

### 8. Open GitHub PR

Open a PR from `astro-pages-migration` into `master`.

Review checklist:

- Old Jekyll files removed.
- Astro source present.
- `public/CNAME` present.
- `public/.nojekyll` present so GitHub Pages never treats the artifact as Jekyll.
- `.github/workflows/deploy.yml` present.
- `npm run build` passes locally.
- No `node_modules`, `dist`, `.astro`, or private files committed.

### 9. Configure GitHub Pages settings

In GitHub repository settings for `vincic/vincic.github.io`:

1. Go to **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Confirm custom domain remains `sasha.vincic.org`.
4. Confirm **Enforce HTTPS** is enabled.

This is usually a one-time manual setting unless already configured.

### 10. Merge and verify deployment

After PR merge:

1. Watch the GitHub Actions workflow.
2. Confirm Pages deployment succeeds.
3. Verify live URLs:

```bash
curl -I https://sasha.vincic.org/
curl -I https://sasha.vincic.org/blog/
curl -I https://sasha.vincic.org/rss.xml
curl -I https://sasha.vincic.org/CNAME
```

4. Verify old important URLs still work or redirect/build:

```bash
curl -I https://sasha.vincic.org/blog/2025/07/chasing-energy-fuels-passion/
curl -I https://sasha.vincic.org/blog/2014/03/blogg100/
```

## Risks and mitigations

### Risk: GitHub Pages source setting still expects branch build

Mitigation: switch Pages source to **GitHub Actions** before or immediately after merge.

### Risk: custom domain lost

Mitigation: keep `public/CNAME` with `sasha.vincic.org`; verify `dist/CNAME` after build.

### Risk: old URLs differ between Jekyll and Astro

Mitigation: run a URL comparison before merge for the most important old URLs. Add Astro redirects or duplicate route aliases if needed.

### Risk: GitHub repo has old dependency/security alerts from Jekyll

Mitigation: removing `Gemfile`/Jekyll dependencies should close future Jekyll dependency alerts once default branch is updated.

### Risk: accidental overwrite of GitHub history

Mitigation: do not force-push; use a normal branch and PR.

## Definition of done

- `vincic/vincic.github.io` contains the Astro source on its default branch.
- GitHub Actions builds with `npm ci && npm run build`.
- GitHub Pages deploys from the `dist` artifact.
- `https://sasha.vincic.org/` serves the new Astro site.
- `https://sasha.vincic.org/blog/` serves the redesigned Blog page.
- `https://sasha.vincic.org/rss.xml` serves the new RSS feed.
- No email address is published by the new site.
- Footer shows `CC BY 4.0`.
