const path = require('path');
const { webpack } = require('webpack');

module.exports = {
    mode: 'development',
    devtool:'eval', //hidden-source-map
    resolve:{
        extensions: ['.jsx', '.js'],
    },

    entry:{
        app: './client',
    },
    module:{
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env', {
                    targets:{
                        browsers:['> 5% in KR', 'last 2 chrome versions'],  //옛날 브라우저 지원
                    },
                }],
                '@babel/preset-react',
            ],
                plugins:[],
            },
        }],
    },
    plugins:[
        new webpack.LoaderOptionPlugin({debug:true}),
    ],  //추가적으로 옵션을 달때 사용
    output:{
        filename: 'app.js',
        path:path.join(__dirname, 'dist'),
    },
};

//entry에 있는 파일에 모듈 적용하고 추가적으로 플러그인 적용하고 output으로 나온다 