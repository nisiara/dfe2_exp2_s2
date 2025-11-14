import { useParams } from "react-router";
import { PageTitle } from "../components/common/Common";

const PatientDetailPage = ({patientList}) => {
  const {id} = useParams()

  const PATIENT = patientList.find( patient => patient.numeroPaciente.toLowerCase() === id)
  
  return (
    <section>
      <PageTitle title='Detalle de Paciente'/>
      <h1 className="text-2xl font-bold mb-5 text-slate-500">{PATIENT.nombrePaciente}</h1>
      <aside className="grid grid-cols-12 gap-4">
         <div className="py-4 col-span-12 md:col-span-6 text-slate-500 flex flex-col border b-color-slate-400">
          <span className="uppercase text-xs">número paciente</span>
          <b className="text-2xl capitalize">{PATIENT.numeroPaciente}</b>
        </div>
         <div className="py-4 col-span-12 md:col-span-6 text-slate-500 flex flex-col border b-color-slate-400">
          <span className="uppercase text-xs">edad</span>
          <b className="text-2xl capitalize">{PATIENT.edad}</b>
        </div>
        <div className="py-4 col-span-12 md:col-span-6 text-slate-500 flex flex-col border b-color-slate-400">
          <span className="uppercase text-xs">Tipo atención</span>
          <b className="text-2xl capitalize">{PATIENT.atenciones[0].tipoAtencion}</b>
        </div>
         <div className="py-4 col-span-12 md:col-span-6 text-slate-500 flex flex-col border b-color-slate-400">
          <span className="uppercase text-xs">especialidad</span>
          <b className="text-2xl capitalize">{PATIENT.atenciones[0].especialidad}</b>
        </div>
        
      </aside>
    </section>
  );
}
 
export default PatientDetailPage;