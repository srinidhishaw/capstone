import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Form.scss"
const MyForm = () => {
  let descArr = []
  let solArr=[]
  let i=0
  const [difficulties,setDiff] = useState([])
  const [diffList,setDiffList] = useState([])
  const [diffId,setDiffId] = useState([])
  const [conditions,setCon] = useState([])
  const [conId,setConId] = useState([])
  const [medications,setMed] = useState([])
  const [isLoading,setLoading]=useState(true)
  const [formData, setFormData] = useState({
    difficulty: [],
    condition:[],
    medication:[]
  });

  
  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => {
      if (prevFormData.condition.includes(value)) {
        return {
          ...prevFormData,
          condition: prevFormData.condition.filter((option) => option !== value),
        };
      } else {
        return {
          ...prevFormData,
          condition: [...prevFormData.condition, value],
        };
      }
    });
    
  };

  const handleDifCheckboxChange = (e) => {
    // console.log(e.target.id)
    const { value } = e.target;
    setFormData((prevFormData) => {
      if (prevFormData.difficulty.includes(value)) {
        return {
          ...prevFormData,
          difficulty: prevFormData.difficulty.filter((option) => option !== value),
        };
      } else {
        return {
          ...prevFormData,
          difficulty: [...prevFormData.difficulty, value],
        };
      }
    });
   
    
  };
  const handleMedicationChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      medication: value,
    }));
  };

  async function search(diff){
    
    let encodedDiff = encodeURIComponent(diff);
    console.log(encodedDiff)
      const con = await axios.get(`http://localhost:8080/conditions/${encodedDiff}`)
      solArr.push(con.data[0])
    console.log(solArr)
    
  }
  // const handleDifSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   let difArr = []
  //   let conArr = []
  //   let medArr = []
  //   console.log(formData.options)
  //   formData.options.forEach((option) => {
  //     data.append('difficulties', option);
  //     difArr.push(option)
  //   });
  //   setDiff(difArr)
  //   data.append('medication', formData.medication);
  //   for (var pair of data.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]);
  //   }
    
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    let difArr = []
    let conArr = []
    let medArr = []
    formData.difficulty.forEach((option) => {
      data.append('difficulty', option);
      
      difArr.push(option)
    });
    formData.condition.forEach((option) => {
      data.append('condition', option);
      
      conArr.push(option)
    });
    
    setCon(conArr)
    setDiff(difArr)
    if(formData.medication){
    medArr = (formData.medication).split(",")
    data.append('medication', medArr);
    setMed(medArr)
    }
    difArr.forEach((e)=>{
      search(e)
    })
    // for (var pair of data.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]);
    // }
    // console.log(conditions)
    
  }

  useEffect(()=>{
    async function getDifficulties(){
      
      const {data} = await axios.get(`http://localhost:8080/conditions/difficulties`)
      descArr = data
      setDiffList(data)
      setLoading(false)
      console.log(descArr)
    }
    getDifficulties()
  },[])
  if(isLoading===true){
    
      return <div className="App">Loading...</div>;
    
  }
console.log(diffList)

    return (
        <main>
          {/* <form onSubmit={handleDifSubmit} className='diff-form'>
      Are you facing any of the following difficulties? Please select all that apply to you:
        <div className="difficulty">
          <input
            type="checkbox"
            id="difficulty"
            name="difficulty"
            value="difficulty cooking"
            checked={formData.options.includes("difficulty cooking")}
            onChange={handleDifCheckboxChange}
          />
          difficulty cooking
          <input
            type="checkbox"
            id="difficulty"
            name="difficulty"
            value="difficulty focusing to do an assignment or work task"
            checked={formData.options.includes("difficulty focusing to do an assignment or work task")}
            onChange={handleDifCheckboxChange}
          />
          difficulty focusing to do an assignment or work task
          <input
            type="checkbox"
            id="difficulty"
            name="difficulty"
            value="hyperventilation/shortness of breath"
            checked={formData.options.includes("hyperventilation/shortness of breath")}
            onChange={handleDifCheckboxChange}
          />
          hyperventilation/shortness of breath
          <input
            type="checkbox"
            id="difficulty"
            name="difficulty"
            value="difficulty doing dishes"
            checked={formData.options.includes("difficulty doing dishes")}
            onChange={handleDifCheckboxChange}
          />
          difficulty doing dishes
        </div>
        </form> */}


      <form onSubmit={handleSubmit} className='con-form'>
      Are you facing any of the following difficulties? Please select all that apply to you:
        <div className="difficulty">

        {diffList.map((difficulty) => {      
          return(
            <>
            <p>{difficulty}</p>
            <input
              key={i} // Add a unique key based on your difficulty data
              type="checkbox"
              id={i++} // Add a unique identifier for each difficulty
              name="difficulty"
              value={difficulty}
              checked={formData.difficulty.includes(difficulty)}
              onChange={handleDifCheckboxChange}
              
            />
            
            </>
         ) }
         )
        }
          {/* <input
            type="checkbox"
            id="1"
            name="difficulty"
            value="difficulty cooking"
            checked={formData.difficulty.includes("difficulty cooking")}
            onChange={handleDifCheckboxChange}
          />
          difficulty cooking
          <input
            type="checkbox"
            id="2"
            name="difficulty"
            value="difficulty focusing to do an assignment or work task"
            checked={formData.difficulty.includes("difficulty focusing to do an assignment or work task")}
            onChange={handleDifCheckboxChange}
          />
          difficulty focusing to do an assignment or work task
          <input
            type="checkbox"
            id="difficulty"
            name="difficulty"
            value="hyperventilation/shortness of breath"
            checked={formData.difficulty.includes("hyperventilation/shortness of breath")}
            onChange={handleDifCheckboxChange}
          />
          hyperventilation/shortness of breath
          <input
            type="checkbox"
            id="difficulty"
            name="difficulty"
            value="difficulty doing dishes"
            checked={formData.difficulty.includes("difficulty doing dishes")}
            onChange={handleDifCheckboxChange}
          />
          difficulty doing dishes */}
        </div>



        Are you diagnosed with any of the following conditions:
        <div className="condition">
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="ADHD"
            checked={formData.condition.includes("ADHD")}
            onChange={handleCheckboxChange}
          />
          ADHD
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="ASD"
            checked={formData.condition.includes("ASD")}
            onChange={handleCheckboxChange}
          />
          ASD
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="PTSD"
            checked={formData.condition.includes("PTSD")}
            onChange={handleCheckboxChange}
          />
          PTSD
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="OCD"
            checked={formData.condition.includes("OCD")}
            onChange={handleCheckboxChange}
          />
          OCD
        </div>
        {/* <input className ="submit-button" type="submit" value="Submit"/> */}
        {/* <div className="result">
          Above checkbox is {isChecked ? "checked" : "un-checked"}.
        </div> */}
      
        Do you take any medications for any of the listed conditions (separated by commas):
        <div className="medication">
          <input
            type="text"
            id="medication"
            name="medication"
            onChange={handleMedicationChange}
            // checked={isChecked}
            // onChange={handleOnChange}
          />
          
        </div>
        <input className ="submit-button" type="submit" value="Submit"/>
      </form>
</main>
      
    );
  }

export default MyForm