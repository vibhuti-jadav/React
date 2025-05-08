import React from 'react'
 import Card from './Card'
 
 const Products = ({data,handleCart}) => {
 
   return (
     <div>
         <div className='max-w-7xl mx-auto p-2 my-5'>
 
             <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                       {
                           data.map((ele)=>(
                                     <Card key={ele.id} {...ele} handleCart={handleCart}/>
                                   
                             ))
                         }
             </div>
         </div>
     </div>
   )
 }
 
 export default Products