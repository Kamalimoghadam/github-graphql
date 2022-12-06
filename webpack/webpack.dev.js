const { EnvironmentPlugin } = require('webpack')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new EnvironmentPlugin({
      GITHUB_GQL_URL: 'https://api.github.com/graphql',
      GITHUB_TOKEN: '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',
    }),
  ],
}
