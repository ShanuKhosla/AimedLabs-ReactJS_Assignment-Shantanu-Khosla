/* eslint-disable no-unused-vars */
import React from 'react'

const Homepage = () => {
  return (
    <div className='font-poppins bg-slate-200 min-h-screen bg-grey-100 flex items-center justify-center mx-auto text-center flex-col gap-5'>
        <h1 className='font-bold text-4xl md:text-6xl text-[#273437]'>Welcome to</h1>
        <img src='https://aimedlabs.com/logo1.svg' />
        <div className='flex flex-row gap-5 my-5 font-semibold'>
        <a href='/signup'><button className="flex items-center justify-center px-6 py-3  gap-5 rounded-md text-xl hover:bg-[#4c367c] transition ease-linear duration-500 bg-[#661fff] border-2 border-[#661fff] text-white cursor-pointer">
        Get Started
        </button>
        </a>
        
        <button className="flex items-center justify-center gap-5 px-6 py-3 rounded-md text-xl bg-transparent text-[#661fff]  transition-all ease-linear duration-500 hover cursor-pointer border-2 border-[#661fff]">
        Learn More
        </button>
        </div>
        </div>
  )
}

export default Homepage