import { useParams } from "react-router";
import { PageTitle } from "../components/common/Common";
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'


const GQL_OBTENER_PACIENTE_POR_ID = gql`
  query ObtenerPacientePorID($numeroPaciente: String!) {
    paciente(numeroPaciente: $numeroPaciente) {
      numeroPaciente
      nombrePaciente
      edad
      atenciones {
        fecha
        nombreMedico
        tipoAtencion
        especialidad
      }
      costo
    }
  }
`;


const PatientDetailPage = () => {
  const { id } = useParams();
  
  const numeroPaciente = id.toUpperCase();


  const { loading, error, data } = useQuery(GQL_OBTENER_PACIENTE_POR_ID, {
    variables: { numeroPaciente },
    fetchPolicy: 'network-only'
  });


  if (loading) {
    return (
      <section>
        <PageTitle title='Detalle de Paciente'/>
        <p className="text-center text-slate-500">Cargando detalle del paciente...</p>
      </section>
    );
  }
  
  if (error) {
    return (
      <section>
        <PageTitle title='Detalle de Paciente'/>
        <div className="text-center text-red-500 p-4">
          <p>Error al cargar el detalle del paciente</p>
          <p className="text-sm">{error.message}</p>
          <p className="text-xs text-slate-400">ID buscado: {id}</p>
        </div>
      </section>
    );
  }

  const PATIENT = data?.paciente;
  
  if (!PATIENT) {
    return (
      <section>
        <PageTitle title='Detalle de Paciente'/>
        <div className="text-center text-yellow-600 p-4">
          <p>No se encontró el paciente con ID: {id}</p>
        </div>
      </section>
    );
  }
  
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
          <b className="text-2xl capitalize">{PATIENT.atenciones?.[0]?.tipoAtencion || 'N/A'}</b>
        </div>
         <div className="py-4 col-span-12 md:col-span-6 text-slate-500 flex flex-col border b-color-slate-400">
          <span className="uppercase text-xs">especialidad</span>
          <b className="text-2xl capitalize">{PATIENT.atenciones?.[0]?.especialidad || 'N/A'}</b>
        </div>
        <div className="py-4 col-span-12 text-slate-500 flex flex-col border b-color-slate-400">
          <span className="uppercase text-xs">costo total</span>
          <b className="text-2xl">${PATIENT.costo}</b>
        </div>
        
      </aside>
    </section>
  );
}
 
export default PatientDetailPage;