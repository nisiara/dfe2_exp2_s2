import React, { Suspense } from "react";
import { Routes, Route } from "react-router";

const HomePage = React.lazy( () => import("../pages/HomePage") )
const PatientsPage = React.lazy( () => import("../pages/PatientsPage"))


const AppRoutes = () => {
  return ( 
    <Suspense fallback={"Cargando"}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/patients" element={<PatientsPage/>} />
      </Routes>
    </Suspense>
  );
}
 
export default AppRoutes;