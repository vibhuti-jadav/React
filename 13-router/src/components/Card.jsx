import React from 'react'

const Card = ({title, price, images, rating, addCart}) => {



  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className=" rounded-t-lg" src={images[0]} alt="" />
      </a>
      <div className="p-5">
        <span className={ `bg-${rating > 4  ? `green` : `red`}-200  rounded-2xl px-5`  }>
          {
          rating
          }
          </span>
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
          <a  href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
          </a>
          <button onClick={()=> addCart({title, price, images, rating})}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add 
          </button>
      </div>
  </div>
  )
}

export default Card