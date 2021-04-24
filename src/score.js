import React from 'react';

function Score (props){
  return(
    <div>
    <p>Your Score: {props.numCorrect}/{props.numQuestions}</p>
    </div>
  )
}
export default Score;