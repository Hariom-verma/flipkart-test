// import React from 'react'
import { Link } from 'react-router-dom'

const ElectronicsChild = () => {
  return (
    <div  className='flex flex-col px-7 rounded py-3 text-2xl bg-slate-300'>
        <Link to={"/electronics/electronicschild/frodge"}>Fridge</Link>
        <Link to={"/electronics/electronicschild/led"}>LED</Link>
        <Link to={"/electronics/electronicschild/cooler"}>Cooler</Link>
        <Link to={"/electronics/electronicschild/washing machine"}>washing machine</Link>
        

    </div>
  )
}

export default ElectronicsChild