import React from 'react'

function Questions({questions  , onAnsClick }) {
  return (
    <>
    <h1 className='head'>World Largest Quiz Competition</h1>
    <div className='question'>
       <h1>{questions.question}</h1>
       <ul className='options'>
            {questions.answerOptions.map((option)=>{
              return (
                <li key={option.text}>
                  <button onClick={() => onAnsClick (option.isCorrect)}
                >{option.text}
                </button>
                </li>
              )
            })}
       </ul>
      
    </div>
    </>
  )
}

export default Questions