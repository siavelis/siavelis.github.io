# siavelis.github.com

A personal website built with Next.js framework.

## Requirements

- Node.js 20.x
- npm 10.x
- Next.js 16.x
- TypeScript

## Deployment

[Github Pages](https://pages.github.com/) is used for deployment with **GitHub Actions** (recommended approach).

### Automatic Deployment

The repository uses GitHub Actions to automatically deploy to GitHub Pages:

1. Push changes to the `master` branch
2. GitHub Actions will automatically build and deploy the site
3. View deployment status in the Actions tab

### One-Time Setup Required

To enable automatic deployment, configure GitHub Pages in your repository settings:

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The deployment workflow will handle the rest automatically

### Alternative Deployment Options

- **Vercel**: [Recommended by Next.js](https://nextjs.org/docs/deployment#vercel-recommended) for advanced features
- **Manual gh-pages**: See [Legacy Deployment](#legacy-deployment-gh-pages) section below

## Development

- Checkout from branch `master`
- Test on development server

```bash
npm run dev
```

- Before deployment you need to check the build output

```bash
npm run build         # will create output in folder 'production' 
serve -d production     # load website http://localhost:8080
```

## Guides

### How to update dependencies

- Run `npm install npm-check-updates`
- Run `ncu -u`
- Run `npm update`
- Run `npm install` to install
- Run `npm outdated` to check for missing updates

### Setup Git Worktree for Deployment Option 2

> **Note**: This section is for the legacy manual deployment approach. The recommended approach is to use GitHub Actions (see [Automatic Deployment](#automatic-deployment)).

```
git worktree add -B gh-pages docs origin/gh-pages
```

### Updating resume through LinkedIn

- Follow guide from [github guide](
  https://github.com/joshuatz/linkedin-to-jsonresume)
- Update file 'json_stub.json'

### Manual deployment

> **Note**: This section is for the legacy manual deployment approach. The recommended approach is to use GitHub Actions (see [Automatic Deployment](#automatic-deployment)).

```
git checkout master
npm run publish
cd docs
git add --all 
git commit -m "Publishing to gh-pages"
git push origin gh-pages
```

## Legacy Deployment (gh-pages)

The previous deployment method used `git worktree` with the `gh-pages` branch. This approach is preserved for reference but the GitHub Actions method above is now recommended.

Reference links:
- [Original blog post](https://itnext.io/next-js-app-on-github-pages-768020f2b65e)
- [Git worktree gist](https://gist.github.com/cobyism/4730490#gistcomment-3369702)

## Continuous Integration & Deployment

The repository uses GitHub Actions for automation:

### CI Pipeline
- **Type Checking**: Verifies TypeScript types with `tsc --noEmit`
- **Build Verification**: Ensures the project builds successfully with `npm run build`
- **Output Validation**: Confirms the build produces expected output files

The CI pipeline runs automatically on every Pull Request to `main`, `master`, `development`, or `feature*` branches. All checks must pass before merging to prevent regressions.

### Deployment Pipeline
- **Automatic Deployment**: Pushes to `master` branch trigger automatic deployment to GitHub Pages
- **Manual Trigger**: Can also be triggered manually from the Actions tab via `workflow_dispatch`

## Future improvements

- Add ESLint configuration for code style enforcement
- Add automated visual regression testing
