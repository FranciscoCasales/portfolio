const ignoreStyles = require('ignore-styles');

ignoreStyles.default(['.sass', '.scss', '.pdf', '.svg', '.png']);

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['svg'],
  name: 'assets/images/[md5:hash:hex:20].[ext]',
  mimetype: 'image/svg+xml',
});

require('asset-require-hook')({
  extensions: ['pdf'],
  name: 'assets/data/[name].[md5:hash:hex:20].[ext]',
  mimetype: 'application/pdf',
});

require('./server');
