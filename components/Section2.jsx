/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section2 = () => {

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10 mb-10 overflow-hidden'>

<div className=' col-span-2 row-span-2 bg-white flex' >
    <div className='flex-col flex'>
        <h2 className='font-bold text-[18px]'> Total leads</h2>
        <img src='/assets/Section2graph.png' className='w-[95%]' alt=''/>

    </div>
    <div>
    <h2 className='text-[14px] font-bold mt-5'> Year <span className='text-blue-700 ml-3'>2023</span> </h2>
    <div className='my-5'>
    <h2 className='font-black text-[20px]'> 27,031</h2>
    <h2> <span className=' font-semibold'>Leads:</span> 58,000</h2>
    </div>
    <img src='/assets/Sec2barline.png' alt=''/>
    <button className='bg-[#5b6acf] p-2 text-white font-bold rounded-lg px-4 ml-3'>All Leads</button>

    </div> 
    </div>


<div className=' col-span-1 row-span-1 bg-white flex'>
    <div className='mx-5 mt-4'>
    <h3 className='font-bold'>
        New Leads
    </h3>
    <h1 className='font-black text-[20px]'>78</h1>
    <img src='/assets/Sec2newleadfoot.png' alt=''/>
    </div>
    <img src='/assets/Sec2pie.png' alt='' className='w-[100px]'/>
</div>


<div  className=' col-span-1 row-span-1  bg-white'>
    <h2 className='font-bold ml-8 mt-5'>HotLeads</h2>
    <div className='flex font-black text-[20px]'><img src='/assets/Sec2Hotlead.png' alt=''/> 75</div>
</div>


<div  className=' col-span-1 row-span-1  bg-white flex '>
<div className='  flex flex-col justify-center ml-7'>
<h1 className='font-black text-[20px] mt-10 ml-2'>672</h1>
    <h3 className='font-bold my-1 '>
        Warm Leads
    </h3>
    <img src='/assets/Sec2newleadfoot.png' alt='' className='w-[40px] ml-2'/>
    </div>
    <div className=' ml-7'>
    <img src='/assets/Sec2warmleads.png' alt='' className='w-[100px] mt-5'/>
    </div>
</div>


<div  className=' col-span-1  row-span-1 bg-white flex flex-row'>
    <div className='ml-7'>

    <h1 className='font-black text-[20px] mt-8 '>78</h1>
    <h3 className='font-bold my-1'>
       Unfinished Leads
    </h3>
    <img src='/assets/Sec2newleadfoot.png' alt=''/>
    </div>
    <div>
    <img src='/assets/Sec2unfinishedleads.png' alt='' className='w-[100px] mt-6'/>
    </div>
    </div>


    </div>
  )
}

export default Section2