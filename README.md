# React Redux Rails Webpack Example

Web application that uses rails + react + redux store + react-bootstrap + webpack. It's a default react with rails web application example. I will add any new additions as need be. I only built this so that I could reference it later on when building other related web applications.

## Installation/Usage
Be sure to have yarn and nodejs installed before usage

```bash
cd basic-react-rails
bundle && yarn
foreman start -f Profile.hot
```

## Setup on your own
**Basic Bash Commands For Installation**

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
