const path = require('path');

module.exports={
    name: 'wordrelay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve:{
        extensions: ['.js', '.jsx']  //알아서 client.js나 client.jsx를 찾아서 확장자를 붙여준다
    },
    
    entry:{
        app:['./client'],  //client.jsx가 WorldRelay.jsx를 불러오므로 추가 안해도 된다, ReackDom도 같이
    }, //입력

    module:{
        rules:[{
            test:/\.jsx?/,  //js와 jsx파일에 룰을 적용하겠다
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output:{
        path: path.join(__dirname, 'dist'),  //현재폴더안에 dist의 경로를 자동으로 생성 해준다
        filename: 'app.js'
    }, //출력
};
//하나로 합쳐주는 작업