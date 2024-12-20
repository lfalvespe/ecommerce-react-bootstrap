import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const App = () => {

  return (
    <div className='bg-dark d-flex flex-column' style={{minHeight: "100vh"}}>
      <Header />
      <Navbar /> 

      <Outlet />

      <Footer />
    </div>
  )
}

export default App