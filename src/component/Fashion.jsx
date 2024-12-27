import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Fashion = () => {
  return (
    <div className='text-2xl bg-slate-100 px-96 py-3'>
      <NavLink to={"/fashion/fashionchild"}>FashionChild</NavLink>
      <Outlet/>
    </div>
  )
}

export default Fashion