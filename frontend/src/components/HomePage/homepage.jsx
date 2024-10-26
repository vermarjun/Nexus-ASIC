import React from "react"
import logo from "/logo.png"

function Home(){
  return (
    <div className='flex justify-center items-center w-full h-screen top-0 z-10 text-white absolute screen'>
      <div className='w-72'>
          <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Home;
