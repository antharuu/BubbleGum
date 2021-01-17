const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    watch: false,
    mode: "production",
    entry: './js/bubblegum-dev.js',
    output: {
        filename: "bubblegum.min.js",
        path: path.resolve("./dist/js")
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '../css/bubblegum.min.css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader'},
            {
                test: /\.styl$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: 'dist/css/',
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {importLoaders: 1},
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            browsers: [
                                                ">0.2%",
                                                "not dead",
                                                "not op_mini all"
                                            ]
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "stylus-loader"
                ],
            }
        ]
    }
};
