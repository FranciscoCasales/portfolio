import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serverRoutes from 'frontend/routes/serverRoutes';
const express = require('express');
const dotenv = require('dotenv');
const webpack = require('webpack');
const helmet = require('helmet');
const getFileName = require('./getFileName').default;

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config.dev');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const webpackServerConfig = {
    port: PORT,
    hot: true,
  };
  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('Prod config');
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html) => {
  const hashManifest = getFileName(ENV === 'development');
  const appCss = hashManifest
    ? hashManifest['vendors.css'] || hashManifest['main.css']
    : 'app.css';
  const vendorBuild = hashManifest ? hashManifest['vendors.js'] : 'vendor.js';
  const appJs = hashManifest ? hashManifest['main.js'] : 'app.js';
  const manifestFileName = hashManifest?.manifestFileName;
  const maskIcon = hashManifest?.maskIcon;
  const icon = hashManifest
    ? hashManifest['assets/images/icon.svg']
    : 'assets/images/icon.svg';
  const touchIcon = hashManifest
    ? hashManifest['assets/images/console-icon-pwa.svg']
    : 'assets/images/console-icon-pwa.svg';

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Portfolio By Francisco Casales">
        <link rel="icon" href="${icon}">
        <link rel="apple-touch-icon" href="${touchIcon}">
        <link rel="stylesheet" href="${appCss}" type="text/css" >
        <title>Portafolio</title>
        <meta name="apple-mobile-web-app-title" content="CodeCasales | Portfolio 👨🏽‍💻" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#215968" />
        ${
          manifestFileName
            ? `<link rel="manifest" href="${manifestFileName}" />`
            : ''
        }
        <link rel="mask-icon" href="${maskIcon}" />
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="initialState.script.js" type="text/javascript"></script>
        <script src="${appJs}" type="text/javascript"></script>
        <script defer src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>
  `;
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(serverRoutes)}
    </StaticRouter>
  );

  res.set('Cache-control', 'private, max-age=300');
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(setResponse(html));
};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen on port ${PORT}`);
  }
});
