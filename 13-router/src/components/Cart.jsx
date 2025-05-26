import React from 'react'

const Cart = ({cart}) => {

    // let num = cart.reduce((accu, ele) => accu + ele.price, 0)
    // console.log(num)

//     [1, 2, 3, 4]

// cart.reduce(sum(a, b))

// function sum(a, b){
//     b = b+a;
// }


// cart.reduce(function(ele, sum){
//     sum = sum + ele;
//     return sum;
// })

// cart.reduce((ele, accu)=> acuu + ele.price)
  return (
    <div className='w-60 border p-2 fixed end-4 top-20'>
        <div className="grid grid-cols-1 gap-2">
            {
                cart.map((item) => (
                    <div key={item.price} className="shadow border border-slate-300 rounded-xl p-1 grid grid-cols-2">
                        <div>
                            <img src={item.images[0]} alt="" />
                        </div>
                        <div>
                            <h5>{item.title}</h5>
                            <h6>{item.price}</h6>
                            <h6>{item.qtn}</h6>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="bg-slate-500 p-4">
            <h4>Price: {cart.reduce((accu, ele) => accu + ele.price, 0)}</h4>
        </div>
    </div>
  )
}

export default Cart