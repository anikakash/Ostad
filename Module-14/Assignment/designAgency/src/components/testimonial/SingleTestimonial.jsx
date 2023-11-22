import React from 'react'

const SingleTestimonial = (props) => {
    const {name, designation, review, imgSrc} = props.test
  return (
    <div className='col-span-4 p-5 border-2 mx-auto text-center'>
      <img src={imgSrc} alt="" />
      <p className='py-3'>{review}</p>
      <h2 className='font-bold text-xl pb-3'>{name}</h2>
      <p className='text-md'>{designation}</p>
    </div>
  )
}

export default SingleTestimonial
