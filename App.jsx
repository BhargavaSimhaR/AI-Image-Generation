import React, { useContext } from 'react'

import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';

import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-red-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App