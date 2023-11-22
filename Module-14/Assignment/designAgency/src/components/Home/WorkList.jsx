import React from 'react'
import { workList, workListCountcard, workListcard } from '../../database/data'


import SingleWorkList from './SingleWorkList';
import SingleWorkList2 from './SingleWorkList2';

const WorkList = () => {
  return (
    <div className='lg:container lg:mx-auto py-10 px-5'>
        <div>
        {
            workList.map((item, i) =>
                <div className='text-center md:text-left' key={i}>
                    <h1 className='text-orange-500 font-semibold'>{item.heading}</h1>
                    <h1 className='text-2xl font-bold md:w-[30%] pt-8 pb-[100px]'>{item.subHeading}</h1>
                </div>
             )
        }
        </div>
        <div className='grid grid-cols-12'>
            {
                workListcard.map((item, i) => <SingleWorkList key={i} item={item} />)
            }
        </div>
        
        <div className='grid grid-cols-12 py-[100px] container mx-auto'>
            {
                workListCountcard.map((item, i)=> <SingleWorkList2 key={i} item={item} /> )
            }
        </div>
      
    </div>
  )
}

export default WorkList
