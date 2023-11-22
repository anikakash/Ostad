import React from 'react'

const SingleService = (props) => {
    const {title, subtitle, images} = props.service
  return (
    <div className='col-span-6 my-10 border-2 p-10'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className='text-md py-10'>{subtitle}</p>
      <img className='w-[400px]' src={images[0]} alt="" />
    </div>
  )
}

export default SingleService
