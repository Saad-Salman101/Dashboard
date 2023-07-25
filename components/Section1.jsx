/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section1 = () => {
    const subsection=[
        {
            heading:"leads",
            image:'/assets/leads.png',
            link:'See refering domain',
            footer:'which sent most traffic'
        },
        {
            heading:"leads1",
            image:'/assets/leads.png',
            link:'See refering domain1',
            footer:'which sent most traffic1'
        },
        {
            heading:"leads2",
            image:'/assets/leads.png',
            link:'See refering domain2',
            footer:'which sent most traffic2'
        },
        {
            heading:"leads2",
            image:'/assets/leads.png',
            link:'See refering domain2',
            footer:'which sent most traffic2'
        },
        {
            heading:"leads2",
            image:'/assets/leads.png',
            link:'See refering domain2',
            footer:'which sent most traffic2'
        },
        {
            heading:"leads2",
            image:'/assets/leads.png',
            link:'See refering domain2',
            footer:'which sent most traffic2'
        }
    ]
  return (
    <div className='grid grid-cols-12 gap-4 w-full md:ml-5 ml-0 '>

         {subsection.map((item, index) => (
        <div key={index} className='bg-white rounded-xl pl-2 col-span-4'>
          <h2 className='my-2'>{item.heading}</h2>
          <div className='flex my-2'>
            <img src={item.image} alt='' />
          </div>
          <h3 className='my-2'>
            <span className='text-blue-500 cursor-pointer'>{item.link}</span> {item.footer}
          </h3>
        </div>
      ))}

    </div>
  )
}

export default Section1