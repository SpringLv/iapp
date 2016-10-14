var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './build/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
    //,
    //plugins: [commonsPlugin]
    ,plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
    //,externals: [
    //    /^\.\/assets$/,
    //    function filter(context, request, cb) {
    //        const isExternal =
    //            request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) &&
    //            !request.match(/^react-routing/) &&
    //            !context.match(/[\\/]react-routing/);
    //        cb(null, Boolean(isExternal));
    //    },
    //]
    ,externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};