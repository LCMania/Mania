import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './One.css';

function One({ history }) {
  const navigate = useNavigate();
  const [ result, setResult ] = useState('');
  const [ value, setValue ] = useState('');
  const [ show, setShow ] = useState(true);
  const inputRef = useRef();

  const onHide = () =>{
    setShow(false);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if (value === '인사'){
      setResult('정답입니다.');
      setValue('');
      onHide();
      inputRef.current.focus();
    } else {
      setResult('틀렸어요!');
      setValue('');
      inputRef.current.focus();
    }
  };

  const userInput = (e) => {
    setValue(e.target.value);
  };


  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2 className='title'>Mission</h2>
        <p className='quiz'>
          상엽이의 주말인사
        </p>
        <input ref={inputRef} value={value} onChange={userInput} placeholder='정답을 입력하세요.' type='string' />
        {show === false ? null : <button>확인</button> }
        <p className='result'>{result}</p>
        <button onClick={() => navigate('/test')}>test</button>
      </form>
    </div>
  );
}

export default One;
