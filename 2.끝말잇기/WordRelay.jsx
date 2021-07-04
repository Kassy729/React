const React = require('react');
const { Component } = React;
//파일을 쪼갤 경우  위에 두개와 밑에 모듈을 작성해주어야 한다

class WordRelay extends Component{  //줄여쓸수 있음
    state = {
        text: 'Hello, webpack',
    };

    render(){
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;  //밖에서도 사용할수 있도록 모듈화