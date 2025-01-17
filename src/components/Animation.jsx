import React from 'react'
import loader from "../assets/loader.gif"

const Animation = () => {
  return (
    <div className='h-screen bg-yellow-100 flex items-stretch justify-center'>
        <div className='self-center w-40'>
            <img src={loader} alt='Animation'/>
        </div>
    </div>
  )
}

export default Animation