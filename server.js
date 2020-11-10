const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack/dev');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// view engine setup
app.set('views', path.join(__dirname, 'ejs'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.render('static', { js: '/bundle.js' });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Your app is running on port ${port}`);
});
