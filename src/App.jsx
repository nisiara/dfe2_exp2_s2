import { useEffect, useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'


const GQL_OBTENER_PACIENTES = gql`
  query ObtenerPacientes {
    pacientes {
      numeroPaciente
      nombrePaciente
      edad
    }
  }
`

const App = () => {

  const {loading, error, data} = useQuery(GQL_OBTENER_PACIENTES, {
    fetchPolicy: 'network-only'
  })

  const [dataPacientes, setDataPacientes] = useState([])
  // const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if(data){
      setDataPacientes(data.pacientes)
    }
    

  }, [error, data])


  return (
    <>
      <Header/>
      <AppRoutes patientList={dataPacientes} loading={loading} error={error} />
      <Footer/>
    </>
  )
}

export default App
