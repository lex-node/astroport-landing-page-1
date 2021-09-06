module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: [
        options.defaultLoaders.babel,
        require.resolve("raw-loader"),
        require.resolve("glslify-loader"),
      ],
    });

    return config;
  },
};
