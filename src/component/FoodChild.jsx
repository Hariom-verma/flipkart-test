// import React from 'react'
import { Link } from 'react-router-dom'

const FoodChild = () => {
  return (
    <div className='flex flex-col px-7 rounded py-3 text-2xl bg-slate-300'>
        <Link to={"/food/foodchild/oil"}>Oil</Link>
        <Link to={"/food/foodchild/paneer"}>Paneer</Link>
        <Link to={"/food/foodchild/rice"}>Rice</Link>
        <Link to={"/food/foodchild/pulses"}>Pulses</Link>

    </div>
  )
}

export default FoodChild