const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')


// Pathes to files
// dist - dev files
// build - path to upper static folder
const dist_dir = '/mk42/static/mk42/vue/';
const build_dir = '/static/mk42/vue/';

// Controls use of hot-reload devserver. When this is used you must also run `node server.js`
const use_hot_reload = process.env.NODE_ENV !== 'production';

// Dev server address specified in server.js
const dev_server_addr = 'localhost';

// Dev server port specified in server.js
const dev_server_port = 8001;

module.exports = {
    entry: ['./mk42/frontend/main.js'],
    output: {
        path: path.resolve(__dirname, '.' + dist_dir),
        filename: 'js/[name]-[hash].js',
        publicPath: build_dir,
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin("css/style.css")
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['transform-runtime', 'transform-object-rest-spread'],
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    }
};

if (process.env.NODE_ENV === 'production') {
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new CleanWebpackPlugin(['vue'], {
            root: path.join(__dirname, '/mk42/static/mk42/')
        }),


        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
else if (use_hot_reload) {
    module.exports.devtool = '#source-map';

    module.exports.entry.push('webpack-dev-server/client?http://' + dev_server_addr + ':' + dev_server_port);
    module.exports.entry.push('webpack/hot/only-dev-server');
    module.exports.output['publicPath'] = 'http://' + dev_server_addr + ':' + dev_server_port + '/static/mk42/';
    module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
    module.exports.plugins.push(new webpack.NoEmitOnErrorsPlugin()); // don't reload if there is an error
}
