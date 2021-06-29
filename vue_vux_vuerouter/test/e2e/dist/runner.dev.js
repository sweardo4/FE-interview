"use strict";

// 1. start the dev server using production config
process.env.NODE_ENV = 'testing';

var webpack = require('webpack');

var DevServer = require('webpack-dev-server');

var webpackConfig = require('../../build/webpack.prod.conf');

var devConfigPromise = require('../../build/webpack.dev.conf');

var server;
devConfigPromise.then(function (devConfig) {
  var devServerOptions = devConfig.devServer;
  var compiler = webpack(webpackConfig);
  server = new DevServer(compiler, devServerOptions);
  var port = devServerOptions.port;
  var host = devServerOptions.host;
  return server.listen(port, host);
}).then(function () {
  // 2. run the nightwatch test suite against it
  // to run in additional browsers:
  //    1. add an entry in test/e2e/nightwatch.conf.js under "test_settings"
  //    2. add it to the --env flag below
  // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
  // For more information on Nightwatch's config file, see
  // http://nightwatchjs.org/guide#settings-file
  var opts = process.argv.slice(2);

  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']);
  }

  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome']);
  }

  var spawn = require('cross-spawn');

  var runner = spawn('./node_modules/.bin/nightwatch', opts, {
    stdio: 'inherit'
  });
  runner.on('exit', function (code) {
    server.close();
    process.exit(code);
  });
  runner.on('error', function (err) {
    server.close();
    throw err;
  });
});