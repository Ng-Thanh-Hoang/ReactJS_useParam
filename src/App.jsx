import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import ListProduct from './component/pages/ListProduct';
import CreateProduct from './component/pages/CreateProduct';
import UpdateProduct from './component/pages/UpdateProduct';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />}>
          <Route index element={<ListProduct />}></Route>
          <Route path='create-product' element={<CreateProduct />}></Route>
          <Route path='update-product'>
            <Route path=':id' element={<UpdateProduct />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App