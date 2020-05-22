# Whether

This is the frontend for the Whether app. 

The project was created with `CRA2`, and uses `customize-cra` to have a little more flexibility.

For styling, `styled-components` is used.

The project has `eslint` and `prettifier` to remove most decisions about code styling. It's mostly airbnb's code standards. It also uses `husky` to make sure your commits pass the `lint`/`prettifier` requirements.

it is hosted via `netlify`, which automatically builds the code inside of master and deploys it to https://whether.cloud. 

## For Contributors

### Setup
First thing to do is clown the repo locally and install the node_packages
```
git clone git@github.com:Lockness/whether.git
cd whether
yarn install
```

To start the dev server, simply run:
```
yarn start
```
This starts the dev server on `http://localhost:3000`. Hot reload is enabled, so feel free to make changes.

### Structure

At the top-level, there are a few expected files: `package.json` and `yarn.lock`. `config-overrides.js` is for customize-cra overrides. There's also the `src/` directory. 

Most of the code is inside of `src/`. Inside you'll find:
- `components/` - Where general, reused components are located. 
- `css/` and `font/` - Where the weather icons are stores, as well as remnants of an deprecated library previously used exist  (I know, I know 😅)
- `redux/` - Where the actions and reducers for our `redux` store are at.
- `services/` - Where our modules to interface with other web services exist.
- `pages/` - Where the different pages are seen. All page-specific components are also located within their page's root directory. 

### Testing

As mentioned, this project uses `jest` and `enzyme` for testing. To test, in the root of the project run 
```
yarn test
```
This will start the interactive runner.

### Bable configs

There is no `.babelrc` file, so instead you'll add babel changes to the `babel` section in the `package.json`. To add a plugin, install it and add it to the `babel` section's `plugins` list. 
```
yarn add -D babel-plugin-styled-components
```

And within `package.json`,
```
...,
"babel": {
    "plugins": ['babel-plugin-styled-components']
},
...
```
