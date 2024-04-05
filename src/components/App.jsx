import { useState, useEffect} from "react";

import Feedback from "./Feedback/Feedback"
import Header from "./Header/Header"
import Options from "./Options/Options";

const getInitialState = ()=>{
  const storage = localStorage.getItem('state');
  if(storage !== null) {
    return JSON.parse(storage)
    } 
    return ({
      "good": 0,
      "neutral": 0,
      "bad": 0
    })

  }
function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(getInitialState);

  const updateFeedback = feedbackType => {
    const click = feedbackTypes[feedbackType] + 1;
    setFeedbackTypes(
      {
        ...feedbackTypes,
        [feedbackType]: click,
      }
    )
    };
    
    const resetFeedback = () => {
      setFeedbackTypes({
        good: 0,
        neutral: 0,
        bad: 0  
    });
    }
    const totalFeedback = Object.values(feedbackTypes).reduce((a,b) => a+b,0);
    
    useEffect(()=>{
      localStorage.setItem('state', JSON.stringify(feedbackTypes))
    }, [feedbackTypes]);
    

  return <div>
    <Header title='Sip Happens Café' description='Please leave your feedback about our service by selecting one of the options below.'/>
    <Options update={()=>updateFeedback("good")} fbType="Good"/>
    <Options update={()=>updateFeedback("neutral")} fbType="Neutral" />
    <Options update={()=>updateFeedback("bad")} fbType="Bad" />
    {totalFeedback > 0 && (<Options update={resetFeedback} fbType="Reset" />)}
    <Feedback totalFeedback={totalFeedback} fbTypes={feedbackTypes} good="Good" neutral="Neutral" bad="Bad" total="Total" positive="Positive"/>
  </div>
  }

export default App
