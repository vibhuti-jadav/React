import React from 'react'

const Card = ({title,price,images,rating}) => {
  return (
    
<a href="#" class="flex flex-col items-center bg-indigo-300 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg" src={images[0]} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h class="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">{title}</h>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-4 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">{rating}</span>


    </div>
</a>

  )
}

export default Card