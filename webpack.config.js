var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
function entries (globPath) {
    var files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        entries[path.join(dirname, basename)] = './' + entry;
    }
    return entries;
}
module.exports = {
    entry: entries('./public/jscss/*.js'),
    output: {
        path: path.join('public/dist','0.0.0'),
        //path: path.join(__dirname, '.', 'public', '', ''),
        //publicPath: '/assets/',
        filename: '[name].js'
        //,chunkFilename: '[id]' + (debug ? '' : '-[chunkhash]') + '.js'
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
                    presets: ['react', 'es2015', 'stage-0', 'stage-1']
                }
            },
            {test: /\.css$/, loader: "style!css"},
            {test: /\.less/, loader: "style!css!less"}
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
        'react-dom': 'ReactDOM',
    }
};