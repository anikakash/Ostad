import React from 'react'

const SingleProjects = (props) => {
    const {title, imgSrc} = props.project
  return (
    <div className='col-span-6 border-2 my-10 p-5'>
      <img className='rounded-xl' src={imgSrc} alt="" />
      <h2 className='text-md py-5 font-bold'>{title}</h2>
    </div>
  )
}

export default SingleProjects
