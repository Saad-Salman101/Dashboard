/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsPower } from 'react-icons/bs';
import { BiSolidMessageSquareMinus } from 'react-icons/bi';
import { BsFillCalendarMinusFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <>
    <div className='h-full w-[10rem] sm:w-[15rem] bg-[#12192b] text-white'>
      <img src='/assets/SideBarLogo.png' alt='' className='w-[50px] mb-4'/>
      <hr className=''/>

      <div className=' flex flex-col items-center my-4'>
      <img src='/assets/cena.jpg' alt='' className='rounded-full w-[40px] h-[40px] my-4'/>
      <h1 className='font-smibold text-[17px]'>Randy Smith</h1>
      <h1 className='text-[14px] text-gray-500'>Lead Developer</h1>
      </div>
      <hr></hr>

      <div className='mt-5 text-gray-500'>
        <h3 className='uppercase text-[12px]'>generals</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>Blueprints</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>Dashboards</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>reports</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>expenses</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>products</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>statistics</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>automation</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>analytics</h3>
        <h3 className='uppercase my-3 ml-4 cursor-pointer hover:text-white'>bannking</h3>

 
      </div>

    <div className='flex w-full mx-8'> 
    <div className='bg-[#303642] mx-2 w-[20px] h-[20px] my-2  text-gray-300 flex justify-center items-center cursor-pointer'><BsFillCalendarMinusFill classname='p-2'/></div>
    <div  className='bg-[#303642] mx-2 w-[20px] h-[20px] my-2 text-gray-300 flex justify-center items-center cursor-pointer'> <BiSolidMessageSquareMinus classname='p-2'/>  </div>
    <div  className='bg-[#303642] mx-2 w-[20px] h-[20px] my-2  text-gray-300 flex justify-center items-center cursor-pointer'>  <BsPower classname='p-2'/>
    </div>
    
     
   
    </div>
      
    </div>
    </>
  )
}

export default Sidebar