import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";


function CustumRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/form" element={<FormScreen />} /> */}
      </Routes>
    </Router>
  );
}

export default CustumRoutes;
