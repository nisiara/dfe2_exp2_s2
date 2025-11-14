import { useEffect, useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Header from './layout/Header'
import Footer from './layout/Footer'

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch('/api/patients')
    .then( response => {
      if(!response.ok)
        throw new Error(response.status + " - " + response.statusText);

      return response.json()
    })
    .then( info => {
      setData(info)
      setLoading(false)
      
    })
    .catch(error => {
      console.error(error.message)
      setLoading(false)
    })

  }, [])


  return (
    <>
      <Header/>
      <AppRoutes patientList={data} loading={loading} />
      <Footer/>
    </>
  )
}

export default App
