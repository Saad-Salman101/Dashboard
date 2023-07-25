import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

const Landing = () => {

  return (
    <div className='flex w-full bg-[#efeef4]'>
        <div className=''> <Sidebar/></div>
        <div className='flex flex-col  w-full overflow-x-hidden'>
             <Topbar/>
             <Section1/>
             <Section2/>
             <Section3/>
             <Section4/>
             <Section5/>
             <Section6/>
             </div>
    
    
    </div>
  )
}

export default Landing