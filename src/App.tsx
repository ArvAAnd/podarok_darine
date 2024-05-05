import React, { useState } from 'react';
import './App.css';
import { kittyList } from './kitty';
import { setTextRange } from 'typescript';


function App() {
  const [topState, setTopState] = useState("740px");
  const [leftState, setLeftState] = useState("860px");
  const [imageCur, setImageCur] = useState(kittyList[1].image);
  const [text, setText] = useState("У меня подарок для самой красивой девочки на свете, это вы?")
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  
  const noFunc = () => {
    setTopState(`${getRandomInt(900)}px`)
    setLeftState(`${getRandomInt(1000)}px`)
  }
  const yesFunc = () => {
    setImageCur(kittyList[2].image);
    setText("Тогда это вам! С днем рождения! Арсен передал, что очень любит вас")
    
  }
  const lox = () => {
    setImageCur(kittyList[0].image);
    setTopState(`770px`)
    setText("Ему бы было очень неприятно такое слышать, но в такой день он вас прощает, отвечайте на вопрос: Вы самая красивая девочка на свете?")
  }
  return (
    
    <div className='main'>
      <h1>{text}</h1>
      <div className='image' style={{ backgroundImage: `url(${imageCur})` }}>
      </div>
      <div className='buttons'>
        <button className='button' onClick={yesFunc}>Да</button>
        <button className='button no' onMouseOver={noFunc} style={{ top: `${topState}`, left: `${leftState}`}}>Нет</button>
        <button className='button' onClick={lox}>Арсен лох</button>
      </div>
    </div>
  );
}

export default App;
