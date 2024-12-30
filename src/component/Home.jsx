import { NavLink, Outlet } from "react-router-dom"


const Home = () => {
  return (
    
       <div className='text-2xl bg-slate-100 px-96 py-3'>
      <NavLink
      to={"/Home/homechild"}>HomeChild</NavLink>
      <Outlet/>
    </div>
  )
}

export default Home