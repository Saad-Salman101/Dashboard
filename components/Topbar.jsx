/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { BsSearch,BsFillBellFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { PiToolboxFill } from 'react-icons/pi';

const Topbar = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here or use the input value as needed
      console.log('Submitted value:', inputValue);
    };

  return (
    <div className=' w-full grid grid-cols-12 '>
        <div className=' flex items-center col-span-4  ml-2'>
        <img src='/assets/cena.jpg' alt='' className='rounded-lg w-[50px] my-4'/>
        <div className='ml-1 md:ml-3'>
            <h1 className='font-bold'>Welcome, Randy Smith !</h1>
            <h3 className='text-[10px]'> These are your analytics stats for today <span >July 4, 2023</span></h3>
        </div>
        </div>

        {/* <div className='flex justify-start items-center flex-1 bg-fuchsia-500'> */}
        <form onSubmit={handleSubmit} className='ml-5 my-auto col-span-4'>
        <div className=' relative'>
      <input
      placeholder='Search'
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleChange}
        className='bg-white rounded-xl h-[40px] w-full '
      />
      
      <button type="submit" className='absolute right-[10px] top-3'><BsSearch/></button>
      </div>
    </form>
    {/* </div> */}

    <div className='flex col-span-4 items-center justify-start md:ml-0 ml-7'>
        <BsFillBellFill className=' w-[25px] md:w-[50px]'/>
        <MdOutlineEmail className=' w-[25px] md:w-[50px]'/>
        <PiToolboxFill className='w-[25px] md:w-[50px]'/>
    </div>




    </div>
  )
}

export default Topbar