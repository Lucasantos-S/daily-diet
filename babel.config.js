module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@': './src',
          components: './src/components',
          utils: './src/utils',
          assets: './src/assets/',
          hooks: './src/hooks',
          pages: './src/pages',
          services: './src/services',
          layouts: './src/layouts'
        }
      }
    ],
    'jest-hoist'
  ]
}