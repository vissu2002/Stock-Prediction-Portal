import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './components/AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRouter from './components/PrivateRouter'
import PublicRouter from './components/PublicRouter'


function App() {
 

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<PublicRouter><Register /></PublicRouter>} />
          <Route path='/login' element={<PublicRouter><Login /></PublicRouter>} />
          <Route path='/dashboard' element={<PrivateRouter><Dashboard /></PrivateRouter>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </AuthProvider>
  
  

    
    </>
  )
}

export default App
