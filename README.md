# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


## Deploy to github pages

Url will be: [https://jasongoemaat.github.io/bitburner-vue-viewer/](https://jasongoemaat.github.io/bitburner-vue-viewer/)

Following [deploy info here](https://vitejs.dev/guide/static-deploy.html)
to create `deploy.sh`, run from git bash in VS Code terminal using `./deploy.sh`
I uncommented and changed the url in this line:

    git push -f git@github.com:JasonGoemaat/bitburner-vue-viewer.git main:gh-pages

I also changed `vite.config.js` to include the 'base' url:

```json
  base: '/bitburner-vue-viewer/',
```

> Github pages seems to be really screwy.  It may take 10+ minutes to deploy, during
which time I got 404 errors in the deployment saying another deployment was in progress
even though it wasn't.   Deleting the workflows helped I think.

In addition, I got a bunch of errors both on my first attempt, and when trying other
times.   Checkout the 'Actions' tab in github and there is a 'pages-build-deployment'
workflow.  Deleting all the existing workflow runs seemed to allow the next deploy to work.

    https://github.com/JasonGoemaat/bitburner-vue-viewer/actions

