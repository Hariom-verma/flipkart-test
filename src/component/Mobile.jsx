// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Mobile = () => {
  return (
    <div className='text-2xl bg-slate-100 px-96 py-3'>


      <NavLink to={"/mobile/mobilechild"} >MobileChild</NavLink>
      <Outlet/>
     
    </div>
  )
}

export default Mobile