const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: [
        options.defaultLoaders.babel,
        require.resolve("raw-loader"),
        require.resolve("glslify-loader"),
      ],
    });

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });  

    return config;
  },
};
