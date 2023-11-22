import React from 'react'

const SingleTeam = (props) => {
    const {name, imgSrc} = props.member
  return (
    <div className='col-span-4 mx-auto text-center'>
        <img className='w-[300px]' src={imgSrc} alt="" />
        <h1>{name}</h1>
    </div>
  )
}

export default SingleTeam
