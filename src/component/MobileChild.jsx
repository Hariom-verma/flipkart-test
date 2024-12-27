// import React from 'react'
// import Mobile from './Mobile'
import { Link } from 'react-router-dom'

const MobileChild = () => {
  
  return (
    <div className='flex flex-col px-7 rounded py-3 text-2xl bg-slate-300'>
      
     <Link to={"/mobile/mobilechild/oppo"}> oppo </Link>
     <Link to={"/mobile/mobilechild/vivo"}> vivo</Link>
     <Link to={"/mobile/mobilechild/realme"}> Realme</Link>
     <Link to={"/mobile/mobilechild/iphone"}> iphone</Link>
     <Link to={"/mobile/mobilechild//oneplus"}> oneplus</Link>
       
       
       
      
    </div>
  )
}

export default MobileChild