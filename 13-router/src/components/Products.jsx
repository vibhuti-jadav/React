import React from 'react'
import Card from './Card'

const Products = ({data, addCart}) => {

  return (
    <div>
        <div className='max-w-7xl mx-auto p-2'>

            <div className=' grid grid-cols-4 gap-3'>
                      {
                          data.map((ele)=>(
                                    <Card key={ele.id} {...ele} addCart={addCart} />
                               
                            ))
                        }
            </div>
        </div>
    </div>
  )
}

export default Products