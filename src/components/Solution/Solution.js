function Solution ({solList}){
    // {solList.map((sol) => {
        // return(
        
        // )
      console.log(solList)
    return(
        <div>
        {solList.map((sol) => {
            return(
        
        <div>
          <p>{sol.description}</p>
         <p>{sol.condition}</p>
        <p>{sol.explanation}</p>
        <p>{sol.solution}</p>
        <p>{sol.symptom}</p>
        </div>
            )
        })}
        </div>
    
    )
// })}
}

export default Solution