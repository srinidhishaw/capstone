import "./Solution.scss"
function SolutionList({ solList }) {
    return (
      <div className="solution-container">
      {solList.map((sol) => (
        <div key={sol.id} className="solution-card">
          <h3>{sol.description}</h3>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Condition: </p>
          <p className='solution-card__content'> {sol.condition}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Symptom: </p>
          <p className='solution-card__content'> {sol.symptom}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Explanation: </p>
          <p className='solution-card__content'> {sol.explanation}</p>
          </div>
          <div className='solution-card_subdiv'>
          <p className='solution-card__subtitle'>Solution: </p>
          <p className='solution-card__content'> {sol.solution}</p>
          </div>
          
        </div>
      ))}
    </div>

    );
  }

  export default SolutionList