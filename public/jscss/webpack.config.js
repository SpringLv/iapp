var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: {
        entry: './entry.js',
    },
    output: {
        path: './index/',
        filename: './index.js'
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
            }
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
    //,externals: {
    //    'react': 'React',
    //    'react-dom': 'ReactDOM'
    //}
};