const nodeExternals = require('webpack-node-externals');
const path = require('path');


module.exports = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: "index.js", 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    }
                }
            }
        ]
    }
}