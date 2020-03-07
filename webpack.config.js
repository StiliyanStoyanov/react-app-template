const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js'
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'cheap-source-map';
        config.output = {
            path: path.join(__dirname, '/dist'),
            filename: 'index_bundle.js'
        };
        config.module = {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        };
        config.plugins = [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
    // console.log(config);
    return config;
};