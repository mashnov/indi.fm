require('@babel/core').transform('code', {});

module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset'],
    ['@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.6.5',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
