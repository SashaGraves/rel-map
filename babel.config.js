module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            screens: './src/screens',
            images: './src/images',
            constants: './src/constants',
            common: './src/common',
          },
        },
      ],
    ],
  };
};
