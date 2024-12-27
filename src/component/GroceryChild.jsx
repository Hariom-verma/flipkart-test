// import React from 'react'
import { Link } from 'react-router-dom'

const GroceryChild = () => {
  return (
    <div className='flex flex-col px-7 rounded py-3 text-2xl bg-slate-300'>
   <Link to={"/grocery/grocerychild/cashews_nuts"}>cashews nuts</Link>

   </div>
  
  )
}

export default GroceryChild