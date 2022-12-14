import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Kids from "../pages/Kids"



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            
            
          
            <Route path="/kids" element={<Kids/>}></Route>
            
           
        </Routes>
    </div>
  )
}

export default AllRoutes