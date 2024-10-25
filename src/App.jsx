import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './container/Home'
import About from './container/About'
import Contact from './container/Contact'
import Shop from './container/Shop'
import Blog from './container/Blog'
import Service from './container/Service'
import Navbar from './container/Navbar'
import Footer from './container/Footer'
import Cart from './container/Cart'


function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
