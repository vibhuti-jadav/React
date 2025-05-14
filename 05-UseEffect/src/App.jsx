
import { useEffect, useState } from 'react';
import './App.css';
import { RiHeartFill, RiHome2Fill, RiInbox2Line } from '@remixicon/react';
// import Remixicon from './component/remixicon';



function App() {


  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [cat , setcat]=useState([])
  const [filter, setFilter] = useState("")
  const [sort,setsort] = useState("")

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=8&skip=${page}&sortBy=price&order=${sort}`);
    const prod = await res.json();
    setData(prod.products);
    console.log(prod)
  };

  useEffect(()=>{
    if(filter)
    fetch(`https://dummyjson.com/products/category/${filter}`)
    .then((res)=>res.json())
    .then((res)=> setData(res.products))
  },[filter])



  useEffect(()=>{
    fetch('https://dummyjson.com/products/category-list')
    .then((res)=>res.json())
    .then((res)=>setcat(res))
  }, [])


  useEffect(() => {
    fetchData();
  }, [page,search,sort]);

  return (
    <>

   

      {/* <RiInbox2Line/> */}
      <div className="flex mx-auto mb-4 gap-20">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
             
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Product name..."
            required
            
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

<div class="w-75">
  <select onChange={(e) => setFilter(e.target.value) }  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   {
    cat.map((ele)=>
      <option key={ele} value={ele} >{ele}</option>
    )
   }
  </select>

</div>

<div className="flex gap-2">
  
<button onClick={()=>setsort("asc")} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">⬇️</button>

<button onClick={()=>setsort("desc")} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">⬆️</button>
</div>

      </div>
      <div className="max-w-7xl m-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((ele) => (
          <div
            key={ele.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={ele.thumbnail}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {ele.title}
                </h5>
              </a>

              <div className="flex justify-around">
                <div className="mt-2.5 mb-5">
                {ele.rating}⭐
              </div>
              <div className=" mt-2.5 mb-5">
                <span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">{ele.category}</span>

              </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${ele.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
       
      </div>

      <div className="flex justify-center mt-6">
        <button 
          onClick={() => setPage(page-1)}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
          {page}
        </span>

        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;