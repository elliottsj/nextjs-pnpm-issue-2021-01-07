module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'HashedModuleIdsPlugin');
    
    config.optimization.minimize = false;
    config.optimization.minimizer = [];

    // config.optimization.splitChunks = false;

    return config;
  }
};
