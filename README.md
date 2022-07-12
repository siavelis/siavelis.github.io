# siavelis.github.com

A personal website built with Next.js framework.

## Requirements

- Nodejs@17.9.1
- npm@8.11.0
- Next.js@12.0.10
- Typescript

### Update dependencies

- Run `npm install npm-check-updates`
- Run `ncu -u`
- Run `npm update`
- Run `npm install` to install
- Run `npm outdated` to check for missing updates

## Deployment

[Github Pages](https://pages.github.com/) is used for deployment.
This [post](https://itnext.io/next-js-app-on-github-pages-768020f2b65e) proposes two solutions.

1. master branch with website root at '/docs'
2. gh-branch

Option 2 was applied using the [gist-comment](https://gist.github.com/cobyism/4730490#gistcomment-3369702)
that actually uses the approach from
[here](https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch)
.

In short, [git worktree](https://git-scm.com/docs/git-worktree) is used, that allows multiple branches of the same local
repository under different directories.

### Setup for option 2

```
git worktree add -B gh-pages docs origin/gh-pages
```

### Other options

- [Vercel](https://nextjs.org/docs/deployment#vercel-recommended) (recommended by Next.js)

## Flow

### Development

- Checkout from branch `master`
- Test on development server

```bash
npm run dev
```

- Push changes on new branch
- Before Pull Request you need to check the build output

```bash
npm run publish
serve -d production
# load http://localhost:8080 in web browser
```

### Deployment (manual)

TODO: make deployment with gitlab ci/cid

```
git checkout master
npm run publish
cd docs
git add --all 
git commit -m "Publishing to gh-pages"
git push origin gh-pages
```
