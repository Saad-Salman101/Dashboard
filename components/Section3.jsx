/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section3 = () => {
  return (
    <div>
        <div className='grid grid-cols-12 gap-4 mt-3'>


            <div className=' col-span-12 lg:col-span-6 row-span-2 bg-white rounded-2xl'>
                <div className='flex justify-between'>
                    <div>Task Calender</div>
                    <div> by month by year</div>

                </div>
                <div className='flex justify-between'>
                    September 2020
                    <div className='bg-[#f0f0f0] w-[200px] rounded-lg flex flex-row items-center h-[30px] '><span className='mx-2'>Daily</span> <span className='mx-2'>Weekly</span> <span className='mx-2'>Monthly</span></div>
                    <button className='h-[30px] w-[120px] bg-blue-600 text-white text-[13px] rounded-full '> + New Agenda</button>
                      </div>
                <img src='/assets/Sec3TaskCalender.png' alt=''/>
                <div>
                </div>

            </div>

            <div className='col-span-5 sm:col-span-6 row-span-1 bg-white rounded-2xl flex flex-row'>
            <div className='flex flex-col'>
                   <p> Client`s Country </p>
                   <div>
                    <img src='/assets/Sec3ClientsCountry.png' alt='' className=' '/>
                    </div>
            </div>
            <img src='/assets/Sec3ClientsCountryPie.png' alt='' className=' '/>
            <div><img src='/assets/Sec3MoreOption.png' alt='' className=' cursor-pointer'/></div>
        </div>
        <div className=' ml-10 sm:ml-0 col-span-6 sm:col-span-6 row-span-1 bg-white rounded-2xl'>
            <div className=' flex items-end justify-between text-[10px] text-gray-500 mt-2'>
                 <p className='ml-4'> Lorem ipsum dolor sit amet.</p> 
            <button className='text-white bg-[#5b6acf] text-[15px] rounded-full p-2 mr-4'> Update progress</button></div>

        <img src='/assets/Sec3Map.png' alt=''/>

        </div>

        </div>
    </div>
  )
}

export default Section3