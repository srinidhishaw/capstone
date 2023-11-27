import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import "./Diary.scss"
function Diary(){
    const [isLoading,setLoading]=useState(true)
    const [diary,setDiary]=useState(true)
    useEffect(()=>{
        async function getDifficulties(){
          
          const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/conditions/diary`)
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
    <Header/>
    <Hero/>
<div className="solution-container">
      {diary.map((sol) => (
        <div key={sol.id} className="diary-card">
          <h3>{sol.description}</h3>
          <div className='diary-card_subdiv'>
          <p className='diary-card__subtitle'>Condition: </p>
          <p className='diary-card__content'> {sol.condition}</p>
          </div>
          <div className='diary-card_subdiv'>
          <p className='diary-card__subtitle'>Explanation: </p>
          <p className='diary-card__content'> {sol.explanation}</p>
          </div>
          <div className='diary-card_subdiv'>
          <p className='diary-card__subtitle'>Solution: </p>
          <p className='diary-card__content'> {sol.solution}</p>
          </div>
          <div className='diary-card_subdiv'>
          <p className='diary-card__subtitle'>Symptom: </p>
          <p className='diary-card__content'> {sol.symptom}</p>
          </div>
          <div className='diary-card_subdiv'>
          <p className='diary-card__subtitle'>Date: </p>
          <p className='diary-card__content'> {sol.timestamp}</p>
          </div>
        </div>
      ))}
</div>
</main>
    )
}

export default Diary