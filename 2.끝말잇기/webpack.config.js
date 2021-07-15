const path = require('path');

module.exports = {
    name: 'wordrelay-setting',  //마음대로 지을수 있음
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve:{
        extensions:['.js', '.jsx']  //확장자 생략해도 되게 해준다
    },

    entry:{
      app:['./client.jsx'],
    },  //입력

    module:{
        rules:[{
            test:/\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output:{
      path: path.join(__dirname, 'dist'),  //dirname 으로 현재경로를 자동으로 지정해 준다
      filename: 'app.js'
    }, //출력

}
//엔트리에 읽어서 모듈을 적용해서 아웃풋으로 뺀다