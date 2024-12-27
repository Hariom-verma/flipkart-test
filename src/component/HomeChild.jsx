import React from 'react'
import { Link } from 'react-router-dom'

const HomeChild = () => {
  return (
    <div className='flex flex-col px-7 rounded py-3 text-2xl bg-slate-300'>
        <Link to={"/home/homechild/gasstove"}>GasStove</Link>
        <Link to={"/home/homechild/matress"}>Matress</Link>
        <Link to={"/home/homechild/furniture"}>Furniture</Link>

        <Link to={"/home/homechild/kitchen_applinces"}>Kitchen Applinces</Link>

        <Link to={"/home/homechild/bedsheets"}>Bedsheets</Link>

    </div>
  )
}

export default HomeChild