var app = require('../../package.json');

module.exports = {
  get $app () {
    return app;
  }
};