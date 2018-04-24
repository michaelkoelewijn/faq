const NAME = 'package';
const DEPENDENCIES = ['jquery'];

const config = {
    devtool: false,
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
        library: NAME,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                        ],
                    },
                },
            },
        ],
    }
};

module.exports = [
    {
        ...config,
        externals: DEPENDENCIES
    },
    {
        ...config,
        output: {
            ...config.output,
            filename: `${NAME}.bundle.js`,
        }
    }
];