import React from 'react'

const Card = ({title,price,images,rating,handleCart}) => {
  return (
    
<a href="#" class="flex flex-col items-center bg-indigo-300 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg" src={images[0]} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h class="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">{title}</h>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
        <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-4 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-900">{rating}⭐</span>
        

        <button type="button" class="text-white bg-gradient-to-br from-pink-500 mt-3 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center " onClick={handleCart}>Add to Cart</button>


    </div>
</a>

  )
}

export default Card