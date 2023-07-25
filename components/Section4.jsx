/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section4 = () => {
    const subsection=[
        {header:'/assets/Sec4Leads.png',
        mainhead:'Design Dashboard Management Resturant - Singapore',
        bar:'/assets/Sec4LeadsBar.png'   
    },
    {header:'/assets/Sec4Leads.png',
    mainhead:'Design Dashboard Management Resturant - Singapore',
    bar:'/assets/Sec4LeadsBar.png'   
    },
    {header:'/assets/Sec4Leads.png',
    mainhead:'Design Dashboard Management Resturant - Singapore',
    bar:'/assets/Sec4LeadsBar.png'   
    },
    {header:'/assets/Sec4Leads.png',
    mainhead:'Design Dashboard Management Resturant - Singapore',
    bar:'/assets/Sec4LeadsBar.png'   
    }
    ]
  return (
    <div className='bg-white my-5 py-5 px-4 mx-5'>
        <h1 className=' text-[15px] font-bold ml-4'>Task and Events</h1>
        <p className='text-gray-500 ml-4'>Lorem ipsum dolor sit amet.</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 '>
            {subsection.map((item,index)=>(
                        <div key={index} className=' col-span-1 border-2 bg-white w-[250px] ml-3'>
                        <img src={item.header} alt='' className='my-2'/>
                        <div className='my-2'>{item.mainhead}</div>
                        <div className='flex flex-row my-2'>
                        <div className='w-[60px] bg-blue-400 rounded-3xl text-[9px] text-center text-blue-700 mx-1'>Ui/Ux design</div>
                        <div className='w-[60px] bg-red-400 rounded-3xl text-[9px] text-center text-red-700 mx-1'>Web dev</div>
                        </div>
                        <img src={item.bar} alt='' className='my-2'/>
                        <img src='/assets/Sec4Footer.png' alt='' className='my-2'/>
                    </div>
                
            ))}

        </div>
    </div>
  )
}

export default Section4