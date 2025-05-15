import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
// import List from './component/List';

function App() {

  const [name , setName] = useState("")
  const [age , setAge] = useState("")
  const [Gender , setGender] = useState("")

  const [data , setdata] = useState([])

  function HandleChange(val, name){
    setdata([...data,{[name]:val}])
    console.log(data)
  }



  function Handlesubmit(){
    let obj= {
      id:uuidv4(),
      name,
      age,
      Gender
    }

    setName("")
    setAge("")
    setGender("")

    setdata([...data,obj])
    console.log(obj)
  }

  return (
    <>


    

<div className="max-w-md mx-auto mt-10 bg-cyan-950 p-5">
  <div className="relative z-0 w-full mb-5 group bg-white p-1 rounded-2xl">
      <input type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  value={name} onChange={(e)=>setName(e.target.value)}/>
  
  </div>
  <div className="relative z-0 w-full mb-5 group  bg-white p-1 rounded-2xl">
      <input type="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={age} onChange={(e)=>setAge(e.target.value)}/>
  
  </div>
  <div className="relative z-0 w-full mb-5 group bg-white p-1 rounded-2xl">
      <input type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={Gender} onChange={(e)=>setGender(e.target.value)}/>
 
  </div>


  <button type="button" onClick={Handlesubmit} class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-pill text-sm px-5 py-2.5  text-center me-2 mb-2">Submit</button>
</div>



        {/* <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" value={age}  onChange={(e)=>setAge(e.target.value)} />
        <input type="text"  value={Gender} onChange={(e)=>setGender(e.target.value)} /> */}


        <input type="text"  name="marks" onChange={(e)=>HandleChange(e.target.value, e.target.name)} />

        {/* <button onClick={Handlesubmit}>submit</button> */}

{/* 
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{Gender}</h1> */}

        {/* <table classNameName='table'>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>Gender</th>
          </tr>


              {
                data.map((ele)=>(
                   <tr key={ele.id}>
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>{ele.Gender}</td>
          </tr>
                )) 
              }
         
        </table> */}


<div className="m-auto mt-5 max-w-7xl">
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    age
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
               
            </tr>
        </thead>


        {
          data.map((ele)=>(
            <tbody>
          <tr key={ele.id} class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {ele.name}
                </th>
                <td class="px-6 py-3.5">
                   {ele.age}
                </td>
                <td class="px-6 py-3.5">
                   {ele.Gender} 
                </td>
               
            </tr>
        </tbody>
          ))
        }
        
     
    </table>
</div>
  </div>        





        {/* <List>
          <li>this is a children</li>
          </List> */}
    </>
  )
}

export default App
