import React, { useState } from 'react'
import AddUser from './components/AddUser'
import GetUser from './components/GetUser'

const Home = () => {
    const [openRegister,setOpenRegister]=useState(true)
    const [openExplore,setOpenExplore]=useState(false)

    const handleOpenRegister=()=>{
        setOpenRegister(true)
        setOpenExplore(false)
    }
    const handleOpenExplore=()=>{
        setOpenExplore(true)
        setOpenRegister(false)
    }
  return (
    <>
      <header className='p-4 shadow-md fixed top-0 right-0 '>
        <div className="flex justify-end gap-5">
            <button className="bg-green-500 px-3 cursor-pointer py-1 rounded text-white" onClick={handleOpenRegister}>Register</button>
            <button className="bg-gray-200 px-3 cursor-pointer py-1 rounded " onClick={handleOpenExplore}>Explore</button>
        </div>
      </header>
      <main className='h-screen flex justify-center items-center'>
        {openRegister && <AddUser/>}
        {openExplore && <GetUser/>}
      </main>
    </>
  )
}

export default Home
