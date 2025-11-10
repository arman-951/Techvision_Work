import React, { useState } from 'react'

const Radio = () => {
    const [gender,setGender]=useState('female')
  return (
    <>
    <h1>Radio Buttons Handler</h1>
        <h2>Select Gender</h2>
      <div className="">
        <input type="radio" checked={gender=='male'} onChange={(e)=>setGender(e.target.value)} value={"male"} name='gender' id='male'  />
        <label htmlFor="male">Male</label>
      </div>
      <div className="">
        <input type="radio" checked={gender=='female'} onChange={(e)=>setGender(e.target.value)} value={"female"} name='gender' id='female'  />
        <label htmlFor="female">Female</label>
      </div>
      <h1>Selected Gender : {gender}</h1>
    </>
  )
}

export default Radio
