# React Redux Rails Webpack Example

**I Will No longer be pushing to this repo anymore!**
Web application that uses React on Rails + react + redux store + bootstrap v4 + Webpack v4 + ES7. It's a default react with rails web application example. I will add any new additions as need be. I only built this so that I could reference it later on when building other related web applications.

## Installation/Usage
Be sure to have yarn and nodejs installed before usage

**HMR**
```bash
cd default-react-rails/
bundle && yarn
foreman start -f Profile.hot
```

**Static**

Before running profile static comment out the style-loader line in [client/.bootstraprc](https://github.com/EasyIP2023/default-react-rails/blob/master/client/.bootstraprc) it uses mini-css-extract-plugin. See file for reason why

```
styleLoaders:
#  - style-loader
  - css-loader
  - postcss-loader
  - sass-loader
```

```bash
cd default-react-rails
bundle && yarn
foreman start -f Profile.static
```

**Important npm packages can be found in client/package.json**

To add packages just use

For development
```bash
cd client
yarn add <package name>@<version number> --dev
```
For dependences
```bash
cd client
yarn add <package name>@<version number> --dep
```

## How Redux Works

![Redux IMG](https://1npo9l3lml0zvr6w62acc3t1-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/redux-cycle.jpg)

## This part is for me and for future references
**Default Bash Commands For Installation**

Commands came form [react_on_rails gitbook](https://shakacode.gitbooks.io/react-on-rails/content/docs/tutorial.html)

```bash
rails new my_app --webpack=react
# be sure to git commit changes
rails generate react_on_rails:install --redux
bundle && yarn
```

or

```bash
bundle exec rails webpacker:install
yarn add "rails/webpacker"
# because the installer has a bug that puts in an invalid version in your package.json.
bundle exec rails webpacker:install:react
yarn add --dev webpack-dev-server
rails generate react_on_rails:install --redux
bundle && yarn
```

### Important Links
1. [Facebook create react app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)
  * [Facebook code splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
  * [Facebook analyzing bundles](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
2. [Webpack code splitting](https://webpack.js.org/guides/code-splitting/)
3. [Shaka code react webpack rails tutorial](https://github.com/shakacode/react-webpack-rails-tutorial)
4. [ReactJs docs](https://reactjs.org/docs)
  * [ReactJs code splitting](https://reactjs.org/docs/code-splitting.html)
