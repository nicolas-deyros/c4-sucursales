const { merge } = require('webpack-merge');

module.exports = (env) => {
  const envConfig = require(`./config/webpack.config.${env.env}.js`);
  return merge(envConfig);
};
