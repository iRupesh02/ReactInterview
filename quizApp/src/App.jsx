import questions from './constant/question.json'
import  Questions from './components/Questions'
import Results from './components/Results'
import { useState } from 'react';
import './App.css'

function App() {
    const [currentQ , setCurrentQ] = useState(0);
    const [userAns , setUserAns] = useState([])

    const handleNext = (isCorrect)=>{
      setCurrentQ(currentQ + 1)
      setUserAns([...userAns , isCorrect])
    }

    const reset = () => {
      setCurrentQ(0)
      setUserAns([])
    }

  return (
    <div>
      {currentQ < questions.length && (<Questions questions={questions[currentQ]} onAnsClick = {handleNext} />)}
      
      {
        currentQ === questions.length && (
          <Results userAns = {userAns} questions = {questions}
          reset = {reset}/>
        )
      }
    </div>
  )
}

export default App
