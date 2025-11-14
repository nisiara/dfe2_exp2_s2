import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import Loading from "../components/loading/Loading";

const HomePage = React.lazy( () => import("../pages/HomePage") )
const PatientsPage = React.lazy( () => import("../pages/PatientsPage"))
const PatientDetailPage = React.lazy( () => import("../pages/PatientDetailPage"))
const AboutUsPage = React.lazy( () => import("../pages/AboutUsPage"))


const AppRoutes = ({patientList, loading}) => {
  return ( 
    <Suspense fallback={<Loading />} >
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/patients" element={<PatientsPage patientList={patientList} loading={loading}/>} />
        <Route path="/patients/:id" element={<PatientDetailPage patientList={patientList}/>} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Suspense>
  );
}
 
export default AppRoutes;