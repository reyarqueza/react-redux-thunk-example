const config = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
      filename: './js/bundle.js',
      path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    }
  };
  
  module.exports = config;