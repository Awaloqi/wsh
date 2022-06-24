const proxy = require('http-proxy-middleware');

const { proxy: proxyConfigs } = require('../package.json');

module.exports = (router) => {
  if (typeof proxyConfigs === 'string') {
    router.use('/api', proxy('/api', { target: proxyConfigs, secure: false, changeOrigin: true }));
  } else {
    Object.keys(proxyConfigs).forEach((key) => router.use(key, proxy(proxyConfigs[key])));
  }
};
