/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section6 = () => {
   const messages=[
        {
            name:'>Chandara kieve',
            message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto',
            time:'5 mins ago',
        },
        {
            name:'>Chandara kieve32',
            message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto',
            time:'23 mins ago',
        },
        {
            name:'>Chandara kieve323',
            message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto',
            time:'2 mins ago',
        },
        {
            name:'>Chandara kieve3',
            message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto',
            time:'3 mins ago',
        },
    ]
  return (
    <div className='  rounded-2xl grid grid-cols-12 my-10'>

        <div className='col-span-12 md:col-span-5 bg-white ml-5 rounded-xl'>
            <div className=' w-full flex justify-between items-center my-4'><h1>Recent Messages</h1> <button className=' bg-blue-500 rounded-3xl p-2 text-white'>+ New Messages</button></div>
            {messages.map((item,index)=>(
            <div  key={index} className='flex items-center shadow-inner'>
                <img src='/assets/Section6Online.png' alt='' className='h-[30px] ml-4'/>
                <div className='mx-5'>
                    <h2>{item.name}</h2>
                    <p className='text-[11px]'>{item.message} </p>
                    <p className='text-gray-500 text-[11px]'>{item.time}</p>
                </div>
                <div className='flex items-center justify-end'>
                <button className='bg-[#eef2fe] text-blue-700 p-2 rounded-2xl font-bold '>
                    Reply
                </button>
                </div>
                
            </div>
                ))}
        </div>
    
        <div className=' col-span-7 '> </div>

    </div>
  )
}

export default Section6