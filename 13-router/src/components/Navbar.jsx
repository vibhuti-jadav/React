import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navbar = ({len, logo, setAuth}) => {

  const navigate = useNavigate()
function logout(){

  localStorage.removeItem("auth")
  setAuth({})
  navigate("/")
  
}

  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo.img} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{logo.text}</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
       
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to='/'>
          <a className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
          </Link>
        </li>
        <li>
          <Link to='/about'>
          <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </Link>
        </li>
        <li>
          <Link to='/product'>
          <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
          </Link>
        </li>
        <li>
          <Link to='/'>
          <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
          <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </Link>
        </li>
        <li>
          <Link to="/cart">
          <a className="bg-yellow-400 text-black block py-1 px-4 rounded-sm ">
            Cart 
            <span className="bg-white text-black ms-3 rounded-2xl p-1" >{len}</span> 
            </a>
          </Link>
        </li>
        <li>
         
          <a onClick={logout} className="bg-red-400 text-black block py-1 px-4 rounded-sm ">
       LogOUt
            </a>
         
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar