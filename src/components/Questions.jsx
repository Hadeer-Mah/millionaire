import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from '../assests/sounds/play.mp3'
import correct from '../assests/sounds/correct.mp3'
import wrong from '../assests/sounds/wrong.mp3'


const Questions = ({QuestionsData, questionNum, setQuestionNum, setTimerStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [startPlay] = useSound(play);
  const [rightAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);

  useEffect(() => {
    startPlay();
    console.log(startPlay);
  }, [startPlay])
  

  useEffect(() => {
    setQuestion(QuestionsData[questionNum - 1]);
  }, [QuestionsData, questionNum]);
  const nextQues = (answer) => {
    if(answer.correct){
      setQuestionNum(prev=> prev + 1);
      setSelectedAnswer(null)
    } else if(answer.id == 16) {
      setTimerStop(true)

    }
     else {
      setTimerStop(true)
    }
  }
  const handleSelect = (answer) => {
    setSelectedAnswer(answer);
    setClassName('answer active');
    setTimeout(() => {
      setClassName(answer.correct? 'answer correct': 'answer wrong');
    }, 2500);
    setTimeout(() => {
      {answer.correct? rightAns(): wrongAns()}
    }, 4000);
    setTimeout(() => {
      nextQues(answer)
    }, 6000);  
  }
  return (
    <>
    <div className="quiz">
        <div className="question">{question?.question}</div>
        <div className="answers">
          
          {question?.answers.map(answer=>(
              <div className={selectedAnswer === answer ? className : "answer"} onClick={()=> handleSelect(answer)}>{answer.text}</div>         
          ))}
        </div>
    </div>
    </>
  )
}

export default Questions