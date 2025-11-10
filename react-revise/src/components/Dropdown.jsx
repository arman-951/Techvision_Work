import React, { useState } from 'react'

const Dropdown = () => {
    const [city,setCity]=useState('')
    // console.log(city)
  return (
    <>
      <h1>Dropdown Selecter Handler:</h1>
      <div className="">
        <select name="" id="" onChange={(e)=>setCity(e.target.value)} /*defaultValue={"delhi"}*/>
            <option value="muzaffarpur">Muzaffarpur</option>
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
        </select>
      </div>
      <h1>Selected City: {city}</h1>
    </>
  )
}

export default Dropdown
