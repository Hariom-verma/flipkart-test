// import React from 'react'
import { Link } from 'react-router-dom'

const FashionChild = () => {
  return (
    <div className='flex flex-col px-7 rounded py-3 text-2xl bg-slate-300'>
       <Link to={"/fashon/fashionchild/clothes"}>Clothes</Link>
       <Link to={"/fashon/fashionchild/beauty"}>Beauty</Link>
        <Link to={"/fashon/fashionchild/footwear"}>footwear</Link>
    </div>
  )
}

export default FashionChild