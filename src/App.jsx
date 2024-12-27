// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Grocery from './component/Grocery'
import Mobile from './component/Mobile'
import Electronics from './component/Electronics'
import Food from './component/Food'
import Fashion from './component/Fashion'
import Home from './component/Home'
import MobileChild from './component/MobileChild'
import Nav from './component/Nav'
import HomeChild from './component/homeChild'
import GroceryChild from './component/GroceryChild'
import FashionChild from './component/FashionChild'
import FoodChild from './component/FoodChild'
import ElectronicsChild from './component/ElectronicsChild'

const App = () => {
  return (

   <div>
    <Nav/>
    <Routes>
      <Route path='/'element={<Grocery/>}>
      <Route path='/grocery/:category'element={<GroceryChild/>} />
      </Route>

      <Route path='/mobile'element={<Mobile/>}>
      <Route path='/mobile/:category' element={<MobileChild/>} />
       </Route>

      <Route path='/electronics'element={<Electronics/>}>
      <Route path='/electronics/:category'element={<ElectronicsChild/>} />
      </Route>

      <Route path='/food'element={<Food/>}>
      <Route path='/food/:category'element={<FoodChild/>} />

      </Route>


      <Route path='/fashion'element={<Fashion/>}>
      <Route path='/fashion/:category'element={<FashionChild/>} />
      </Route>


      <Route path='/home'element={<Home/>}>
      <Route path='/home/:category' element ={<HomeChild/>}/>
      </Route>
      

    


    </Routes>
    

   </div>
  )
}

export default App