import { useState, useEffect} from "react";
import Notification from "./Notification/Notification";
import Feedback from "./Feedback/Feedback"
import Description from "./Description/Description"
import Options from "./Options/Options";

const getInitialState = ()=>{
  const storage = localStorage.getItem('state');
  if(storage !== null) {
    return JSON.parse(storage)
    } 
    return ({
      good: 0,
      neutral: 0,
      bad: 0
    })

  }
function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(getInitialState);

  const updateFeedback = feedbackType => {
    const clicks = feedbackTypes[feedbackType] + 1;
    setFeedbackTypes(
      {
        ...feedbackTypes,
        [feedbackType]: clicks,
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
    const positiveFeedback = Math.round((feedbackTypes.good / totalFeedback) * 100);

    useEffect(()=>{
      localStorage.setItem('state', JSON.stringify(feedbackTypes))
    }, [feedbackTypes]);
    

  return <div>
    <Description title='Sip Happens Café' description='Please leave your feedback about our service by selecting one of the options below.'/>
    <Options totalFeedback={totalFeedback} updateGood={()=>updateFeedback('good')} updateNeutral={()=>updateFeedback('neutral')} updateBad={()=>updateFeedback('bad')} resetFeedback={resetFeedback}/>
    {totalFeedback > 0 ? 
    (<Feedback totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} feedbackTypes={feedbackTypes} />) : 
    <Notification/>}
  </div>
  }

export default App
