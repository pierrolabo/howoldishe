const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy(['/'], { target: 'https://0.0.0.0:2000' }));
};
