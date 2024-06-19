const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.tsx',
    devServer: {
        client: {
            overlay: false,
        },
        open: true,
        hot: true,
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', ['@babel/preset-react', {
                        runtime: 'automatic',
                    }], '@babel/preset-typescript'],
                    plugins: [isDevelopment && require('react-refresh/babel')].filter(Boolean),
                },
            }],
        }, {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            }, 'sass-loader'],
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'assets/images',
                },
            },
        }],

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
    }), isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};
