# siavelis.github.com
A personal website built with Next.js framework.

## Requirements
- Node.js@12.16.2
- npm@6.14.4
- Next.js

## Deployment
[Github Pages](https://pages.github.com/) is used for deployment. 
This [post](https://itnext.io/next-js-app-on-github-pages-768020f2b65e) proposes two solutions.
1. master branch with website root at '/docs'
2. gh-branch

Option 2 was applied using the [gist-comment](https://gist.github.com/cobyism/4730490#gistcomment-3369702) 
that actually uses the approach from 
[here](https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch).

In short, [git worktree](https://git-scm.com/docs/git-worktree) is used, 
that allows multiple branches of the same local repository under different directories.

### Setup
```
git worktree add -B gh-pages docs origin/gh-pages
```

### Production build
```
npm run 
cd docs
git add --all 
git commit -m "Publishing to gh-pages"
git push origin gh-pages
```
 
### Other options
- [Vercel](https://nextjs.org/docs/deployment#vercel-recommended) (recommended by Next.js)