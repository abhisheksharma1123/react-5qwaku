// App.js
import React, { useState } from 'react';
import Score from './score.js'



const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;


function App() {
  const [numQuestions, setnumQuestions] = useState(0);
   const [numCorrect, setnumCorrect] = useState(0);
  
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">
              {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
            </p>
          </div>
          <button>True</button>
          <button>False</button>
          <Score numQuestions={numQuestions} numCorrect={numCorrect}/>
        </div>
      </div>
    );
  
}

export default App;