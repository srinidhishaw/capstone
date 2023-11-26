import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Solution from '../Solution/Solution';
import { Navigate } from 'react-router-dom';
import "./Form.scss"
const MyForm = () => {
  let descArr = []
  let solArr=[]
  let i=0
  const [difficulties,setDiff] = useState([])
  const [diffList,setDiffList] = useState([])
  const [solList,setSolList] = useState([])

  const [isSolList,setIsSolList] = useState(false)
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
      // solArr.push(con.data[0])
    setSolList((prevSolList) => [...prevSolList, con.data[0]]);
    setIsSolList(true)
  }
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
  async function fetchDataForDifficulties(difficulties) {
    const promises = difficulties.map((e) => search(e));
    await Promise.all(promises);
  }

  useEffect(() => {
    fetchDataForDifficulties(difficulties);
  }, [difficulties]);
  

  const handleSubmit = async (e) => {
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
    // if(formData.medication){
    // medArr = (formData.medication).split(",")
    // data.append('medication', medArr);
    // setMed(medArr)
    // }

    // const promises = formData.condition.map(async (selectedCondition) => {
    //   const response = await axios.get(`http://localhost:8080/conditions/${selectedCondition}`);
    //   return response.data[0];
    // });

    // const results = await Promise.all(promises);

    // console.log(results)


    
    
  }

  useEffect(()=>{
    async function getDifficulties(){
      
      const {data} = await axios.get(`http://localhost:8080/conditions/difficulties`)
      descArr = data
      setDiffList(data)
      setLoading(false)
    }
    getDifficulties()
  },[])
  if(isLoading===true){
    
      return <div className="App">Loading...</div>;
    
  }

  return isSolList ? <SolutionList solList={solList} /> :(
        <main>
      <form onSubmit={handleSubmit} className='con-form'>
      Are you facing any of the following difficulties? Please select all that apply to you:
      <div className="difficulty">
          {diffList.map((difficulty) => (
            <div key={i++} className="difficulty-checkbox">
              <input
                type="checkbox"
                id={i}
                name="difficulty"
                value={difficulty}
                checked={formData.difficulty.includes(difficulty)}
                onChange={handleDifCheckboxChange}
              />
              <label htmlFor={i++}>{difficulty}</label>
            </div>
          ))}
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
      
        {/* Do you take any medications for any of the listed conditions (separated by commas): */}
        {/* <div className="medication">
          <input
            type="text"
            id="medication"
            name="medication"
            onChange={handleMedicationChange}
            // checked={isChecked}
            // onChange={handleOnChange}
          />
          
        </div> */}
        <input className ="submit-button" type="submit" value="Submit"/>
      </form>
</main>
      
    );
  }

export default MyForm