// import React from 'react'
// import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Food = () => {
   
   
  return (
    <div className='text-2xl bg-slate-100 px-96 py-3'>
      <NavLink to={"/food/foodchild"}>foodchild</NavLink>
      <Outlet/>
    </div>
  )
}

export default Food