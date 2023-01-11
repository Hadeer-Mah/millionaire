import { useEffect, useState } from 'react';
import './App.css'
import Questions from './components/Questions';
import Timer from './components/Timer';
function App() {
  const [questionNum, setQuestionNum] = useState(1);
  const [timerStop, setTimerStop] = useState(false);
  const [earned, setEarned] = useState('$ 0')
  const listData = [
    {id: 1, amount: '$ 100'},
    {id: 2, amount: '$ 200'},
    {id: 3, amount: '$ 300'},
    {id: 4, amount: '$ 500'},
    {id: 5, amount: '$ 1000'},
    {id: 6, amount: '$ 2000'},
    {id: 7, amount: '$ 4000'},
    {id: 8, amount: '$ 8000'},
    {id: 9, amount: '$ 16000'},
    {id: 10, amount: '$ 32000'},
    {id: 11, amount: '$ 64000'},
    {id: 12, amount: '$ 125000'},
    {id: 13, amount: '$ 250000'},
    {id: 14, amount: '$ 500000'},
    {id: 15, amount: '$ 1000000'},

  ].reverse();

  const QuestionsData = [
    {
      id: 1,
      question: "What does hippopotamus mean and in what langauge?",
      answers: [
        {
          text: "Fat Pig (Latin)",
          correct: false,
        },
        {
          text: "River Horse (Greek)",
          correct: true,
        },
        {
          text: "River Horse (Latin)",
          correct: false,
        },
        {
          text: "Fat Pig (Greek)",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following created and directed the Katamari Damacy series?",
      answers: [
        {
          text: "Keita Takahashi",
          correct: true,
        },
        {
          text: "Hideki Kamiya",
          correct: false,
        },
        {
          text: "Shu Takumi",
          correct: false,
        },
        {
          text: "Shinji Mikami",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which internet company began life as an online bookstore called Cadabra?",
      answers: [
        {
          text: "eBay",
          correct: false,
        },
        {
          text: "Overstock",
          correct: false,
        },
        {
          text: "Shopify",
          correct: false,
        },
        {
          text: "Amazon",
          correct: true,
        },
      ],
    },
     {
       id: 4,
        question: "Some people call me the space cowboy is the first line from what song?",
        answers: [
          {
            text: "Fandango",
            correct: false,
          },
          {
            text: "Take The Money and Run",
            correct: false,
          },
          {
            text: "The Joker",
            correct: true,
          },
          {
            text: "Fly Like an Eagle"
            ,
            correct: false,
          },
        ],
      },{
        id: 5,
        question: "What is the name of Team Fortres Heavy Weapons Guy minigun?",
        answers: [
          {
            text: "Sasha",
            correct: true,
          },
          {
            text: "Betty",
            correct: false,
          },
          {
            text: "Anna",
            correct: false,
          },
          {
            text: "Diana",
            correct: false,
          },
        ],
      },{
        id: 6,
        question: "In Breaking Bad, the initials W.W. refer to which of the following?",
        answers: [
          {
            text: "Wally Walrus",
            correct: false,
          },
          {
            text: "Willy Wonka",
            correct: false,
          },
          {
            text: "William Wolf",
            correct: false,
          },
          {
            text: "Walter White",
            correct: true,
          },
        ],
      },{
        id: 7,
        question: "What is the name of French electronic music producer Madeon 2015 debut studio album?",
        answers: [
          {
            text: "The City",
            correct: false,
          },
          {
            text: "Adventure",
            correct: true,
          },
          {
            text: "Icarus",
            correct: false,
          },
          {
            text: "Pop Culture",
            correct: true,
          },
        ],
      },{
        id: 8,
        question: "What play is the quote 'Hell is other people from'?",
        answers: [
          {
            text: "The Flies",
            correct: false,
          },
          {
            text: "The Condemned of Altona",
            correct: false,
          },
          {
            text: "The Devil and the Good Lord",
            correct: false,
          },
          {
            text: "No Exit",
            correct: true,
          },
        ],
      },{
        id: 9,
        question: "Which team won 2014 FIFA World Cup in Brazil?",
        answers: [
          {
            text: "Germany",
            correct: true,
          },
          {
            text: "Argentina",
            correct: false,
          },
          {
            text: "Brazil",
            correct: false,
          },
          {
            text: "Netherlands",
            correct: false,
          },
        ],
      },{
        id: 10,
        question: "'All the Boys' by Panic! At the Disco was released as a bonus track on what album?",
        answers: [
          {
            text: "Vices Virtues",
            correct: false,
          },
          {
            text: "Death Of A Bachelor",
            correct: false,
          },
          {
            text: "A Fever You Can't Sweat Out",
            correct: false,
          },
          {
            text: "Too Weird To Live, Too Rare To Die!",
            correct: true,
          },
        ],
      },{
        id: 11,
        question: "How many games are there in the Colony Wars series for the PlayStation?",
        answers: [
          {
            text: "2",
            correct: false,
          },
          {
            text: "3",
            correct: true,
          },
          {
            text: "4",
            correct: false,
          },
          {
            text: "5",
            correct: false,
          },
        ],
      },{
        id: 12,
        question: "Prior to working at Wizards of the Coast, Mark Rosewater was a writer for which show?",
        answers: [
          {
            text: "NYPD Blue",
            correct: false,
          },
          {
            text: "The X-Files",
            correct: false,
          },
          {
            text: "Roseanne",
            correct: true,
          },
          {
            text: "Boy Meets World",
            correct: false,
          },
        ],
      },{
        id: 13,
        question: "How long is an IPv6 address?",
        answers: [
          {
            text: "32 bits",
            correct: false,
          },
          {
            text: "64 bits",
            correct: false,
          },
          {
            text: "128 bytes",
            correct: false,
          },
          {
            text: "128 bits",
            correct: true,
          },
        ],
      },{
        id: 14,
        question: "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
        answers: [
          {
            text: "Leicester City",
            correct: true,
          },
          {
            text: "Tottenham Hotspur",
            correct: false,
          },
          {
            text: "Watford",
            correct: false,
          },
          {
            text: "Stoke City",
            correct: false,
          },
        ],
      },
      {
        id: 15,
        question: "Which of these founding fathers of the United States of America later became president?",
        answers: [
          {
            text: "Alexander Hamilton",
            correct: false,
          },
          {
            text: "James Monroe",
            correct: true,
          },
          {
            text: "Samuel Adams",
            correct: false,
          },
          {
            text: "Roger Sherman",
            correct: false,
          },
        ],
      },
  ];
 
  useEffect(() => {
    questionNum > 1 && setEarned (listData.find((n)=> n.id === questionNum - 1).amount)
  }, [questionNum, listData])
  
  return (
  <>
  <div className="app">
    <div className="bgContainer">
      {timerStop? <h1 className='earned'>You Earned: {earned}</h1>:<>
      <div className="top">
        <div className="timer">
          <Timer setTimerStop={setTimerStop} questionNum={questionNum}/>
        </div>
      </div>
      <div className="bottom">
        <Questions QuestionsData={QuestionsData} questionNum={questionNum} setQuestionNum={setQuestionNum} setTimerStop={setTimerStop}/>
        </div>
      </>}
      
    </div>
    <div className="pyramidList">
      <ul className="moneyList">
        {listData.map(list=>(
          <li className={questionNum === list.id ? 'moneyItem active': 'moneyItem'}>
          <span className="qNumber">{list.id}</span>
          <span className="amountNumber">{list.amount}</span>
        </li>   
        ))}
           
      </ul>
    </div>
    
  </div>
  </>
  );
  
}

export default App;
