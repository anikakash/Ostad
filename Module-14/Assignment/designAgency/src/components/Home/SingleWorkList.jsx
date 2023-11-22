import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const SingleWorkList = (props) => {
    const {item} = props
  return (

    <div className='col-span-12 md:col-span-4 text-center md:text-left mb-10'>
        <img className='mx-auto md:mx-0' src={item.img} alt="" />
        <h1 className='text-xl font-bold py-5'>{item.title}</h1>
        <p className='text-md md:w-[60%] pb-5'>{item.discription}</p>
        <button className='flex mx-auto md:mx-0'>Learn More <FaArrowRight className='mt-[7px] ml-4' /></button>
    </div>
  )
}

export default SingleWorkList
