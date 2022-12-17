import React from "react";
import { Route, Routes } from "react-router-dom";
import Kids from "../Kids";
import DesignArt from "../DesignArt"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/design" element={<DesignArt />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
