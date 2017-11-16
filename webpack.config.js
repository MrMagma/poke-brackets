var webpack = require("webpack")
var stylusLoader = require("stylus-loader");
var path = require("path");

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true"))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');

module.exports = {
    entry: {
        index: "./src/scripts/index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["env"]
                }
            },
            {
                test: /\.styl$/,
                loader: "style-loader!css-loader!stylus-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules")
        ]
    },
    plugins: [definePlugin, commonsPlugin, new stylusLoader.OptionsPlugin({
        stylus: {
            use: [require('nib')()],
            import: ['~nib/lib/nib/index.styl']
        }
    })]
};
