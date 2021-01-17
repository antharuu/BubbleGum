const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    watch: false,
    mode: "development",
    entry: ['./js/bubblegum.js', './css/bubblegum.styl'],
    output: {
        filename: "bubblegum.min.js",
        path: path.resolve("./dist")
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'bubblegum.min.css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
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
            {
                test: /\.(png|jpe?g|gif|ttf|eot|woff2?|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[hash:7].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.styl$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
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
