const {
  override,
  fixBabelImports,
} = require("customize-cra");

module.exports = config => {
  require('react-app-rewire-postcss')(config, true); //use postcss.config.js 

  return config;
};
