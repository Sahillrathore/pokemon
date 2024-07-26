import React from 'react'

const Card = ( {title, img} ) => {
  return (
    <div className='card border border-gray-500 h-fit w-56 p-4 rounded-lg shadow-lg bg-gray-100/60 hover:shadow-xl hover:scale-105 transition-all'>
        <img src={img}
         alt={`${title}-img`}
         className='w-full'
         />

         <h1 className='text-2xl font-semibold capitalize text-center mt-3'>{title}</h1>
    </div>
  )
}

export default Card