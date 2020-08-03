const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        // 输出文件名
        filename: 'bundle.js',
        // 输出文件路径
        path: path.resolve(__dirname, 'build'),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        }
        ]
    }
};