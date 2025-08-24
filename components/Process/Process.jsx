
import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FiTruck } from "react-icons/fi";
import { PiFactory } from "react-icons/pi";






const Process = () => {
   
   const renderSteps = steps.map(item =>{
    return(
        <div className={`flex-1 basis-[300px] ${item.id % 2 == 0 ? 'md:-mt-100' : ''}` }>
           <span className='flex justify-center items-center w-18 h-18 mx-auto rounded-full text-9xl text-zinc-800 outline-[3px] outline-offset-6 outline-zinc-800 outline-dashed'>{item.number}</span> 
            <div className='flex items-center gap-x-5  mt-10'> 
                <span className='flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full '>{item.icon}</span>

               <div className='flex-1'>
                    <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        </div>
    )
   }) 


  return (
   <section>
       <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='w-fit mr-auto'>
            <Heading highlight="Our" heading="Process" />
        </div>

        <div className='flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50'>
            {renderSteps}
        </div>

       </div>
   </section>
  )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1 />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />,


    },

    {
        id: 2,
        number:  <TbCircleNumber2 />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
,


    },

    {
        id: 3,
        number: <TbCircleNumber3 />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon:  <SlBadge />,


    },
        {
        id: 4,
        number: <TbCircleNumber4 />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <FiTruck />
 ,


    },
]
