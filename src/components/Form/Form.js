import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    options: [],
  });

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => {
      if (prevFormData.options.includes(value)) {
        return {
          ...prevFormData,
          options: prevFormData.options.filter((option) => option !== value),
        };
      } else {
        return {
          ...prevFormData,
          options: [...prevFormData.options, value],
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    let conArr = []
    let medArr = []
    formData.options.forEach((option) => {
      data.append('option', option);
      conArr.push(option)
    });
    data.append('medication', formData.medication);
    console.log(conArr)
    
  }
    return (
        <main>
      <form onSubmit={handleSubmit}>
        Are you diagnosed with any of the following conditions:
        <div className="topping">
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="ADHD"
            checked={formData.options.includes("ADHD")}
            onChange={handleCheckboxChange}
          />
          ADHD
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="ASD"
            checked={formData.options.includes("ASD")}
            onChange={handleCheckboxChange}
          />
          ASD
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="PTSD"
            checked={formData.options.includes("PTSD")}
            onChange={handleCheckboxChange}
          />
          PTSD
          <input
            type="checkbox"
            id="condition"
            name="condition"
            value="OCD"
            checked={formData.options.includes("OCD")}
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