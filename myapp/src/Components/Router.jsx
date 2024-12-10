// import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
// import Header from './Header' 
import Sidenav from './Sidenav'
import Next from './Next'
import Elec from './Elec'
import Jewellery from './Jewellery'
import Mens from './Mens'
import Womens from './Womens'
import SingleProduct from './SingleProduct'



const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes >
        <Route index element={<Layout />} />
        <Route path='/sidenav' element={<Sidenav />} />
        <Route path='/Next' element={<Next />} />
        <Route path='/electronics' element={<Elec />} />
        <Route path='/jewelery' element={<Jewellery />} />
        <Route path="/men's clothing" element={<Mens />} />
        <Route path="/women's clothing" element={<Womens />} />
        <Route path="/singleproduct/:category/:id" element={<SingleProduct />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router