import { useState } from "react"
const List = () => {

        const [itemIndex,setitemIndex ] = useState(-1)

        const items= ["vibhuti","isha","priyanka","mirali","nirali","hitisha"]


  return (
    <div>
        <div className="mx-auto w-50 mt-5">
            <h1 className="text-center my-3">List group</h1>
             <ul className='list-group'>

            {
                items.map((item, index)=><li key={item} onClick={()=>setitemIndex(index)} className={index==itemIndex ? 'list-group-item active' : 'list-group-item'}>{index + 1}     person is {item}</li>)
            }
        </ul>
        
        </div>
       
    </div>
  )
}

export default List