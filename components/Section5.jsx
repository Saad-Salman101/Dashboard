/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { BsSearch } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { TbPictureInPictureOff } from 'react-icons/tb';

const Section5 = () => {
    const userslist=[
        {
            username:'delphia',
            name:'rafeel kundia',
            expertise:'Web Developer',
           email:'email@gmail.com',
           location:'Karachi',
           role:'administrator'

        },
        {
            username:'delphia',
            name:'rafeel kundia',
            expertise:'Andriod Developer',
           email:'email@gmail.com',
           location:'Karachi',
           role:'administrator'

        },
        {
            username:'delphia',
            name:'rafeel kundia',
            expertise:'Web Developer',
           email:'email@gmail.com',
           location:'Karachi',
           role:'administrator'

        },
        {
            username:'delphia',
            name:'rafeel kundia',
           email:'email@gmail.com',
           expertise:'Web Developer',
           location:'Karachi',
           role:'administrator'

        },
        {
            username:'delphia',
            name:'rafeel kundia',
            expertise:'Web Developer',
           email:'email@gmail.com',
           location:'Karachi',
           role:'administrator'

        },
        {
            username:'delphia',
            name:'rafeel kundia',
            expertise:'Web Developer',
           email:'email@gmail.com',
           location:'Karachi',
           role:'administrator'

        },
        {
            username:'delphia',
            name:'rafeel kundia',
            expertise:'Web Developer',
           email:'email@gmail.com',
           location:'Karachi',
           role:'administrator'

        }
    ]

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here or use the input value as needed
      console.log('Submitted value:', inputValue);
    };

    const [selectedSpan, setSelectedSpan] = useState(null);

    const handleSpanClick = (index) => {
      setSelectedSpan(index);
    };
    
  return (
    <div className='w-full overflow-hidden'>
        <div className=' w-full flex justify-between mx-5 my-4'>
            <div>
            <h1> User Management</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat voluptate dolorum cumque esse. Accusamus!</p>
            </div>
            <button className='bg-blue-500 text-white rounded-2xl text-[12px] px-2 mr-7'>+ Create User</button>
        </div>
        <div>
        <div className='h-[40px] mx-5 mt-5'>
      <span
        className={`mx-3 text-[12px] p-2 rounded-lg ${
          selectedSpan === 0 ? 'bg-blue-500 text-white' : ''
        } cursor-pointer`}
        onClick={() => handleSpanClick(0)}
      >
        All Users
      </span>
      <span
        className={`mx-3 text-[12px] p-2 rounded-lg ${
          selectedSpan === 1 ? 'bg-blue-500 text-white' : ''
        } cursor-pointer`}
        onClick={() => handleSpanClick(1)}
      >
        Customers
      </span>
      <span
        className={`mx-3 text-[12px] p-2 rounded-lg ${
          selectedSpan === 2 ? 'bg-blue-500 text-white' : ''
        } cursor-pointer`}
        onClick={() => handleSpanClick(2)}
      >
        Administrator
      </span>
      <span
        className={`mx-3 text-[12px] p-2 rounded-lg ${
          selectedSpan === 3 ? 'bg-blue-500 text-white' : ''
        } cursor-pointer`}
        onClick={() => handleSpanClick(3)}
      >
        Subscriber
      </span>
    </div>
        </div>


        <div className='grid grid-cols-12 bg-white p-4 mx-5 rounded-xl'>
        <div className=' relative col-span-11  '>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleChange}
        className='bg-white rounded-md w-full border-b-2 mb-4 '
      />    
      <button type="submit" className='absolute lg:right-[10px] left-4 top-1'><BsSearch/></button>
      </div>
      <div className='grid grid-cols-12 col-span-11 uppercase  gap-x-1'>
        <div className='col-span-2'> <input type='checkbox'/> Username</div>
        <div className='col-span-3'>name</div>
        <div className='col-span-2'>email</div>
        <div className='col-span-1'>post</div>
        <div className='col-span-1'>location</div>
        <div className='col-span-2 ml-2'>role</div>
        <div className='col-span-1'>action</div>
        
      </div>
      {userslist.map((item, index)=>(
      <div key={index} className='grid grid-cols-12 col-span-11   gap-x-1'>
        <div className='col-span-2 font-bold flex items-center'> <input type='checkbox'/>{item.username}</div>
        <div className='col-span-3 flex items-center'><img src='/assets/cena.jpg' alt='' className='h-[20px] rounded-full'/>
            <div className='flex flex-col justify-start'> <p className='text-[14px] text-blue-500'> {item.name}</p>
            <p className='text-[10px] text-gray-500'> {item.expertise}</p></div></div>
        <div className='col-span-2 flex items-center'> {item.email}</div>
        <div className='col-span-1 flex items-center ml-2'>8</div>
        <div className='col-span-1 flex items-center'> {item.location}</div>
        <div className='col-span-2 flex items-center'><div className=' bg-red-500 text-[10px] text-red-800 rounded-3xl p-1'> {item.role}</div></div>
        <div className='col-span-1 flex items-center'> <TbPictureInPictureOff className='cursor-pointer'/> <MdDelete className='text-blue-500 ml-2 cursor-pointer'/></div>
      </div> 
      ))}



        </div>
       
        
    </div>
  )
}

export default Section5