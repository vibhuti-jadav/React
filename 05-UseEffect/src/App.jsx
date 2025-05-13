
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("")

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=8&skip=${page}&category=${filter}`);
    const prod = await res.json();
    setData(prod.products);
    console.log(prod)
  };

  useEffect(() => {
    fetchData();
  }, [page,search,filter]);



  return (
    <>

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

<div class="w-70">
  <select onChange={(e)=>setFilter(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   <option selected>Choose a Product</option> 
    <option value="bea">beauty</option>
    <option value="frag">fragrances</option>
    <option value="fur">furniture</option>
    <option value="gro">groceries</option>
    <option value="hd">home-decoration</option>
  </select>
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
        {data.length === 0 && search !== '' && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No products found matching your search.
          </p>
        )}
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
          // disabled={filteredData.length < 8} 
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;