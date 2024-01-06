# siavelis.github.com

A personal website built with Next.js framework.

## Requirements

- Nodejs@19.8.1
- npm@9.5.1
- Next.js@12.0.10
- Typescript

## Deployment

[Github Pages](https://pages.github.com/) is used for deployment.
This [post](https://itnext.io/next-js-app-on-github-pages-768020f2b65e) proposes two solutions.

1. master branch with website root at '/docs'
2. gh-branch
3. Through [Vercel](https://nextjs.org/docs/deployment#vercel-recommended) (recommended by Next.js)

Option 2 was applied using the [gist-comment](https://gist.github.com/cobyism/4730490#gistcomment-3369702) that
implements approach from
[blog post](https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch).

In short, [git worktree](https://git-scm.com/docs/git-worktree) is used, that allows multiple branches of the same local
repository under different directories.

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

### Setup Git Worktree for Deployment for Deployment Option 2

```
git worktree add -B gh-pages docs origin/gh-pages
```

### Updating resume through LinkedIn

- Follow guide from [github guide](
  https://github.com/joshuatz/linkedin-to-jsonresume)
- Update file 'json_stub.json'

### Manual deployment

```
git checkout master
npm run publish
cd docs
git add --all 
git commit -m "Publishing to gh-pages"
git push origin gh-pages
```

## Future improvements

- Make deployment with gitlab ci/cid
