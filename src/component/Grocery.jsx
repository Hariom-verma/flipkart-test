import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Grocery = () => {
  return (
    <div className='text-2xl bg-slate-100 px-96 py-3'>
    <NavLink to={"/grocery/grocerychild"}>GroceryChild</NavLink>
    <Outlet/>
  </div>
  )
}

export default Grocery