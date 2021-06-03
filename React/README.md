# React base project

Initial configuration to perform a project with webpack, ESLint, prettier, React and Typrscrip

<div align="center">
  <img src="./src/assets/img/react.png" width="230" height="200" />
</div>

## Included Configuration

- Babel configuration to transpile jsx

- Webpack configuration with the next listed plugins and loaders

  - HtmlWebpackPlugin to load html files
  - MiniCssExtractPlugin to load css files
  - CssMinimizerPlugin to minify css
  - Css loader to unify all css files
  - Sass loader to transpile sass files to css
  - Image loader to load images as import
  - Font loader
  - Webpack alias to improve imports
  - TerserPlugin to minify js files

## Environment variables

Rename .env-example to .env and add your environment variables.

## Instalation

Use the package manage [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) to install dependencies and run the project

```bash
  npm install
  npm run start
```
