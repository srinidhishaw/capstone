import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Diary(){
    const [isLoading,setLoading]=useState(true)
    const [diary,setDiary]=useState(true)
    useEffect(()=>{
        async function getDifficulties(){
          
          const {data} = await axios.get(`http://localhost:8080/conditions/diary`)
          console.log(data)
          setDiary(data)
          setLoading(false)
        }
        getDifficulties()
      },[])
      if(isLoading===true){
        return <div className="App">Loading...</div>;
    }  
    return(
<main>
<div className="solution-container">
      {diary.map((sol) => (
        <div key={sol.id} className="solution-card">
          <h3>{sol.description}</h3>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Condition: </p>
          <p className='solution-card__content'> {sol.condition}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Explanation: </p>
          <p className='solution-card__content'> {sol.explanation}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Solution: </p>
          <p className='solution-card__content'> {sol.solution}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Symptom: </p>
          <p className='solution-card__content'> {sol.symptom}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Date: </p>
          <p className='solution-card__content'> {sol.timestamp}</p>
          </div>
        </div>
      ))}
</div>
</main>
    )
}

export default Diary