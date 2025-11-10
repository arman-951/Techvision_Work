import React, { useState } from 'react'

const Checkbox = () => {
    const [skills,setSkills]=useState([]);

    const handleChange=(e)=>{
        // console.log(e.target.value,e.target.checked)
        if(e.target.checked){
            setSkills([...skills,e.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }
  return (
    <>
      <h1>CheckBox Handler</h1>
      <div className="">
        <input type="checkbox" onChange={handleChange} id="javascript" value="javascript"/>
        <label htmlFor="javascript">JavaScript</label>
      </div>
      <div className="">
        <input type="checkbox" onChange={handleChange} id="css" value="css" />
        <label htmlFor="css">Css</label>
      </div>
      <div className="">
        <input type="checkbox" onChange={handleChange} id="html" value="html" />
        <label htmlFor="html">HTML</label>
      </div>
      <div className="">
        <input type="checkbox" onChange={handleChange} id="react" value="react"/>
        <label htmlFor="react">React</label>
      </div>
      {/* <h1>Skills Selected: {skills.toString().split('-')}</h1> */}
      <h1>Skills Selected: {skills.join('-')}</h1>
    </>
  )
}

export default Checkbox
