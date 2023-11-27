import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SolutionList from '../Solution/Solution';
import Solution from '../Solution/Solution';
import { Navigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
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
      const con = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/conditions/${encodedDiff}`)
      // solArr.push(con.data[0])
    setSolList((prevSolList) => [...prevSolList, con.data[0]]);
    setIsSolList(true)
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
      
      const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/conditions/difficulties`)
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
    // return isSolList ? (
    //   <SolutionList solList={solList} />
    // ) : (
    //   <Navigate to="/solutions"/>
    // )
    // return !isSolList ?(


        <main>
      <form onSubmit={handleSubmit} className='con-form'>
      <h1 className='con-form__title'>Are you facing any of the following difficulties? Please select all that apply to you:</h1>
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



        <p className='condition-title'>Are you diagnosed with any of the following conditions:</p>
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