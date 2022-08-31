module.exports = function (api) {
  api.cache(true);

  const mainPresets = [
    ['@babel/preset-env', {
      'targets': {
        'node': '16.17',
      },
    }],
  ];

  const renderPresets = [
    ['@babel/preset-env', {
      'targets': {
        'modules': false,
      },
    }],
  ];

  const plugins = ["@babel/plugin-transform-runtime","@babel/plugin-syntax-jsx", "@babel/plugin-transform-react-jsx"];

  return {
    env: {
      main: {
        presets: mainPresets,
      },
      renderer: {
        presets: renderPresets,
      }
    },
    plugins: plugins,
  };
};
