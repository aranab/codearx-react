# Resource Overview
A project of react developing template
 1. Javascript(ES6 or ECMAScript 6 or ECMAScript 2015, ES2016, ES2017 syntax)
 2. [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
 3. [Reactjs](https://reactjs.org/)
 4. [babel 7.x](https://babeljs.io/)
 5. [Webpack and webpack module loaders](https://webpack.js.org/)
 6. [Sass](https://sass-lang.com/)

 - To generate distribution(dist) folder: Run `> npm run build`
 - To start project in webserver: Run `> npm start`

### What is React?
 - A library for user interfaces
 - Create at Facebook and Instagram
 - React Native for mobile
 - [React Website](https://reactjs.org/)
 - [github repo](https://github.com/facebook/react/)
 - Virtual DOM
  
### Efficient rendering with React:
 - DOM Diffing
   - Compares rendered content with the new UI changes
   - Makes only the minimal changes necessary
   - Compares JavaScript objects
   - Is faster than writing to or reading from DOM

### Pure React:
 - [`React.createElement(type, [props], [...children])`](https://reactjs.org/docs/react-api.html#creating-react-elements)
 - [`ReactDOM.render(element, container[, callback])`](https://reactjs.org/docs/react-dom.html#render)
 - [httpster webserver](https://www.npmjs.com/package/httpster)

### Refactoring elements using JSX:
 - JSX: JavaScript XML and its a tag base syntax.  
 - [JSX is use to create React elements](https://reactjs.org/docs/introducing-jsx.html)
 - JSX expression wrap by carly braces `{}`
 - JSX code is transpiled by babel.

### Install react:
 - [react](https://www.npmjs.com/package/react): Run `> npm install react`
 - [react-dom](https://www.npmjs.com/package/react-dom): Run `> npm install react-dom`

### Babel inline transpiling:
 - [Babel is a JavaScript compiler](https://babeljs.io/docs/en/), which is transpiling 
   unsupported javascript and make the js code browser compatible.
 - [ECMAScript 6/es6, also known as ECMAScript 2015](https://github.com/lukehoban/es6features#readme)
 - [es2016, es2017](https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e)
 - [babel in the browser](https://babeljs.io/setup#installation)

## Babel static transpiling with babel-cli 7.x:
 - [Babel cli and core](https://babeljs.io/docs/en/babel-cli): Run `> npm install --save-dev @babel/core @babel/cli`
 - Create [`.babelrc`](https://babeljs.io/docs/en/config-files/) configuration file 
   where all of [preset](https://babeljs.io/docs/en/presets) and
   [plugins](https://babeljs.io/docs/en/plugins/) are enabled
 - Presets
   - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env): Run `> npm install --save-dev @babel/preset-env`
   - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react): Run `> npm install --save-dev @babel/preset-react`
 - Output file generate command `npm run babel [source file path] --out-file [destination file path]`: 
   Run `> ./node_modules/.bin/babel ./src/index.js --out-file ./dist/bundle.js`

## Building with webpack:
 - Is a module bundler
 - Creates static files
 - Automates processes
 - Used current version [Webpack 4.x](https://github.com/webpack/webpack/releases/tag/v4.19.1) and [webpack-cli](https://github.com/webpack/webpack-cli): 
   Run `> npm install --save-dev webpack webpack-cli`
 - [webpack configuration sample](https://webpack.js.org/configuration/#options)
 - [webpack-dev-server](https://github.com/webpack/webpack-dev-server/): Run `> npm install --save-dev webpack-dev-server`
 - Loaders:
   - [babel-loader](https://webpack.js.org/loaders/babel-loader/): Run `> npm install --save-dev babel-loader`
   - [html-loader](https://webpack.js.org/loaders/html-loader/): Run `> npm install --save-dev html-loader`
   - [style-loader](https://webpack.js.org/loaders/style-loader/): Run `> npm install --save-dev style-loader`
   - [css-loader](https://webpack.js.org/loaders/css-loader/): Run `> npm install --save-dev css-loader`
   - [postcss-loader](https://webpack.js.org/loaders/postcss-loader/): Run `> npm install --save-dev postcss-loader`
   - [sass-loader](https://webpack.js.org/loaders/sass-loader/) and [node-sass](https://www.npmjs.com/package/node-sass): 
     Run `> npm install --save-dev sass-loader node-sass`
   - [image loading and optimizing ](https://webpack.js.org/guides/asset-management/#loading-images)
   - [font loading](https://webpack.js.org/guides/asset-management/#loading-fonts)
 - Plugins: 
    - [Generate index.html](https://webpack.js.org/plugins/html-webpack-plugin/): Run `> npm install --save-dev html-webpack-plugin`
    - [Write to disk the html file](https://github.com/jantimon/html-webpack-harddisk-plugin): Run `> npm install --save-dev html-webpack-harddisk-plugin`
    - [Clean output files](https://www.npmjs.com/package/clean-webpack-plugin): Run `> npm install --save-dev clean-webpack-plugin`
    - [Extracts CSS into separate files](https://webpack.js.org/plugins/mini-css-extract-plugin/): Run `> npm install --save-dev mini-css-extract-plugin`
    - [JS minimizer](https://github.com/webpack-contrib/terser-webpack-plugin): Run `> npm install --save-dev terser-webpack-plugin`
    - [CSS minimizer](https://github.com/NMFR/optimize-css-assets-webpack-plugin): Run `> npm install --save-dev optimize-css-assets-webpack-plugin` 
 - Build command: Run `> npm run build`
 - Start webserver: Run `> npm start`

# React App:

### Create components:
 - Create a [React Component](https://reactjs.org/docs/react-without-es6.html) by extending [`React.Component`](https://reactjs.org/docs/react-component.html) rather than using `React.createClass` since its deprecated from version `16.0` onwards and has been moved to a separate package ['create-react-class'](https://www.npmjs.com/package/create-react-class).
 - [Adding Props to components](https://reactjs.org/docs/components-and-props.html). Props of React is being an object and every props is a key.
 - Class has additional features such as [local state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) and [lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class).
 - [Stateless functional components](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components)
 - Added react-icons: Run `> npm install --save react-icons`
 - [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
 - [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
 - [Random Users Demo Data](https://randomuser.me/)
 - [isomorphic-fetch is used for fetching data from API](https://www.npmjs.com/package/isomorphic-fetch): Run `> npm install --save isomorphic-fetch es6-promise`

### Props:
 - Provide props default value.
 - [Validating or typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 - [ProTypes](https://www.npmjs.com/package/prop-types): Run `> npm install --save prop-types`

### State:
 - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### React Router:
 - [Declarative routing for React](https://github.com/ReactTraining/react-router)
 - [react-router](https://www.npmjs.com/package/react-router): Run `> npm install --save react-router`
 - [DOM bindings for React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): Run `> npm install --save react-router-dom`
 - [React Native bindings for React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-native): Run `> npm install --save react-router-native`

### Form Component:
 - In most cases, React team recommend using [controlled components](https://reactjs.org/docs/forms.html#controlled-components) to implement forms. In a controlled component, form data is handled by a React component. The alternative is [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html), where form data is handled by the DOM itself.
 - [Legacy API: String Refs](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) is deprecated.
 - Using [refs](https://reactjs.org/docs/glossary.html#refs) in class components.
 - [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
 - [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)
 - Two-way function binding by using Refs.
 - [All Supported HTML Attributes](https://reactjs.org/docs/dom-elements.html)
 - Adding a autocomplete component for dropdownlist.

### Useful Links:
 - State management by [Redux](https://github.com/reduxjs/redux)
 - Data management solution by [Relay](https://facebook.github.io/relay/)
 - Data management solution by [Falcor](https://netflix.github.io/falcor/)
 - Data management solution by [GraphQL](https://graphql.org/)

## License
 Single license MIT
