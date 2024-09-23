import React from 'react'

function Results({userAns , questions , reset}) {
    const correctAnswer = userAns.filter((ans) => ans).length
  return (
    <div className='results'>
  <h2>Result</h2>
  <p>your answered {correctAnswer} out of {questions.length} questions{" "} <span onClick={()=>reset()}>click here Retry</span></p>
    
  

  <ul>
    {questions.map((question , index)=>{
        return (
            <li data-correct={userAns[index]} key={index}>Q{index + 1}.{question.question}
            <b>
                {
                    userAns[index] ? "":
                    `-${question.answerOptions.find((ans) => ans.isCorrect).text}`
                }
            </b>

            </li>
        )
      })}
  </ul>
  </div>
  )
}

export default Results