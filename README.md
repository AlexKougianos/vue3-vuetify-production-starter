# Overview

base template of a [Vue 3](https://vuejs.org/) app using [Vuetify](https://vuetifyjs.com/en/), [Vue Router](https://router.vuejs.org/), [Pinia](https://pinia.vuejs.org/), [Axios](https://axios-http.com/), [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) 

## Preparation

You need to install node and git locally. 

## Folder Structure

``` markdown
├── public                     # public static assets (directly copied)
│   └── favicon.ico            # favicon
├── src                        # main source code
│   ├── assets                 # assets
│   ├── components             # global components
│   ├── router                 # router
│   ├── store                  # store
│   ├── pages                  # pages
│   ├── plugins                # plugins
│   ├── App.vue                # main app component
│   └── main.js                # app entry file
├── .browserslistrc            # browserslist config file (to support Autoprefixer)
├── .editorconfig              # editor code format consistency config
├── .env                       # env variable configuration
├── eslint.config.mjs          # eslint config
├── index.html                 # index.html template
├── jsconfig.json              # javascript config
├── package.json               # package.json
├── prettier.config.mjs        # prettier config
└── vite.config.mjs            # vite config
```

## Project setup

- Clone repo locally

   ``` bash
   git clone https://github.com/AlexKougianos/vue3-vuetify-base-template.git
   ```

- Delete `.git` folder
- Rename folder `name` property in `package.json`
- Re-initialize git

   ``` bash
   git init
   ```

### Install dependencies

``` bash
pnpm install
```

### Development Server with hot-reloading

```bash
pnpm serve
```

### Compiles and minifies for production

``` bash
pnpm build
```

### Formats Code

``` bash
pnpm format
```

### Lints and fixes files

``` bash
pnpm lint
```
