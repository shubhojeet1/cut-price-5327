import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DesignandArts from '../pages/DesignNav'
import Kids from "../pages/Kids"





const AllRoutes = () => {
  return (
    <div>
        <Routes>
            
            
          
        <Route path="/kids" element={<Kids />}></Route>

        <Route path='/design' element={<DesignandArts/>} ></Route>
       
        
        
            
           
        </Routes>
    </div>
  )
}

export default AllRoutes