const React = require('react');
// const { render } = require('react-dom');
// const { Component } = React;

//파일을 쪼갤 경우  위에 두개와 밑에 모듈을 작성해주어야 한다
const {useState, useRef} = React;

const WordRelay = () => {  
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            value('');
            inputRef.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
        return (
            <>
            <div>{word}</div>
                <form onSubmit={onSubmitForm}>
                    <label htmlFor="wordInput">글자를 입력하세여,</label>
                    <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput}/>
                    <button>입력!!</button>
                </form>
                <div>{result}</div>
            </>
        );
};

module.exports = WordRelay;  //밖에서도 사용할수 있도록 모듈화




// const React = require('react');
// const { useState } = React;

// const WordRelay = () => {
//   const [word, setWord] = useState('제로초');
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');
//   const inputEl = React.useRef(null);

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     if (word[word.length - 1] === value[0]) {
//       setResult('딩동댕');
//       setWord(value);
//       setValue('');
//       inputEl.current.focus();
//     } else {
//       setResult('땡');
//       setValue('');
//       inputEl.current.focus();
//     }
//   };

//   return (
//     <>
//       <div>{word}</div>
//       <form onSubmit={onSubmitForm}>
//         <input
//           ref={inputEl}
//           value={value}
//           onChange={(e) => setValue(e.currentTarget.value)}
//         />
//         <button>입력!</button>
//       </form>
//       <div>{result}</div>
//     </>
//   );
// };

// module.exports = WordRelay;