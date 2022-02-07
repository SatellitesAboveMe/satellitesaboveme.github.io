import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Main } from "./RouteComponents/Main";
import { SatelliteInfo } from "./RouteComponents/SatelliteInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='satelliteInfo/:id' element={<SatelliteInfo/>}/>
        <Route path='*' element={<h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
