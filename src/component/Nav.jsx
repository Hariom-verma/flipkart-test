import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between px-20 py-5 bg-green-700 text-white text-xl'>
       <NavLink  className={(e) => (e.isActive ? "text-red-600 p-2  text-2xl " : "")} to={"/home"}>Home</NavLink>  
      <NavLink  className={(e) => (e.isActive ? "text-red-600 p-2 text-2xl " : "")} to={"/"}>Grocery</NavLink>  
      <NavLink   className={(e) => (e.isActive ? "text-red-600 p-2 text-2xl " : "")} to={"/fashion"}>fashion</NavLink>  
      <NavLink   className={(e) => (e.isActive ? "text-red-600 p-2 text-2xl " : "")} to={"/food"}>Food</NavLink> 
      <NavLink   className={(e) => (e.isActive ? "text-red-600 p-2 text-2xl " : "")} to={"/mobile"}>Mobile
</NavLink> 
      <NavLink   className={(e) => (e.isActive ? "text-red-600 p-2 text-2xl" : "")} to={"/electronics"}>Electronics</NavLink> 
        

    </div>
    

  )
}

export default Nav