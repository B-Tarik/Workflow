module.exports = {
    mode: 'development',
    entry: {
        app: __dirname + '/app/assets/scripts/app.js',
        vendor: __dirname + '/app/assets/scripts/vendor.js'
    },
    output: {
        path: __dirname + '/app/temp/scripts',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}