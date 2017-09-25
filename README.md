# Login form [![Build Status](https://travis-ci.org/dawid-drelichowski/login-form.svg?branch=master)](https://travis-ci.org/dawid-drelichowski/login-form) [![bitHound Overall Score](https://www.bithound.io/github/dawid-drelichowski/login-form/badges/score.svg)](https://www.bithound.io/github/dawid-drelichowski/login-form)
Login form based on [React](https://facebook.github.io/react/)

## Requirements

* [Node.js](https://nodejs.org/) version 6.0.0 or higher.
* Optionally [Yarn](https://yarnpkg.com/lang/en/) as alternative to [NPM](https://www.npmjs.com/) package manager.

## Installation

Depending on preferred package manager execute `yarn install` or `npm install` command.  
Copy `config.json.dist` to `config.json` file.  
If preferred change login or password in `config.json` file. To generate password hash use `npm run bcrypt <new password>` or `npm run bcrypt <new password>`  
There is no build assets version attached with this repository. To build them run `npm run build` or `yarn run build`.  

## Usage

Run **index.html** in favorite browser. Consider **only last two versions of major browsers and IE10+** are supported.

## Tests

Based on [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme).

Command: `npm test` or `yarn test`

## Development

To rebuild assets every time they change execute `npm run build:dev` or `yarn run build:dev`.  
There is a better way: `npm run watch` or `yarn run watch` command will continue running in terminal and watch all relevant files for changes.  
[Webpack](https://webpack.js.org/) will then automatically recompile assets when it detects a change.  
It's possible to use [Webpack DevServer](https://webpack.js.org/configuration/dev-server/). To start it use `npm run start` or `yarn run start`  
To specify a port number to listen for requests on, modify [webpack.config.babel.js](dawid-drelichowski/login-form/blob/master/webpack.config.babel.js)  
Default server port is *3000*.  
Minified (so called "production") version of assets can be build with `npm run build` or `yarn run build`.

## NPM scripts

Available [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/lang/en/) scripts:

* `npm run build` or `yarn run build` combine related scripts/styles and minimizes them with [Webpack](https://webpack.js.org/).
* `npm run build:dev` or `yarn run build:dev` combine related scripts/styles with [Webpack](https://webpack.js.org/).
* `npm start` or `yarn start` runs [Webpack DevServer](https://webpack.js.org/configuration/dev-server/).
* `npm run lint` or `yarn run lint` runs [ESLint](http://eslint.org/) source code check.
* `npm test` or `yarn test` runs tests.
* `npm run watch` or `npm run watch` runs combination of related scripts/styles in [Webpack's watch mode](https://webpack.js.org/api/cli/#watch-options).
* `npm run flow` or `yarn flow` runs [Flow](https://flow.org/) static type checker.
* `npm run bcrypt <password>` or `yarn run bcrypt <password>` generates [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) hash of given `<password>`
