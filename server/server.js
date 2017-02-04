const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.path
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  heartbeat: 10 * 1000
}));

const config = require('./config/config');
const routes = require('./routes/core');

app.use('/', express.static('assets'));
app.use('/', routes);

const server = app.listen(config.port, () => {
  console.log(`Server up.`);
});

module.exports = app;