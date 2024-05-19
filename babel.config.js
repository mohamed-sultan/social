module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx','.json'],
        alias: {
          '@hooks': './src/hooks',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@pages': './src/components/pages',
          '@navigation':'./src/navigation',
          '@services':'./src/services'

        },
      },
    ]
  ]
};
