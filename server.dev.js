const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express(),
    DIST_DIR = path.join(__dirname, 'dist'),
    HTML_FILE = path.join(DIST_DIR, 'index.html');
const config = require('./webpack.dev.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
});

app.listen(process.env.PORT || 3000);