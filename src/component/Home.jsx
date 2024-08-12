import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="group d-flex mt-2">
            <i className="fa fa-home pt-1 fs-4"></i>
            <h1 className='fs-3 ms-2'>DashBoard</h1>
          </div>
          <NavLink to="/" className='w-100 text-white fs-5 text-start btn' style={{background:'#fdba74'}}>Products</NavLink>
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home