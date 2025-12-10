import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Docter from './pages/Docter'
import About from './pages/About.jsx'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docters' element={<Docter />} />
        <Route path='/docters/:speciality' element={<Docter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/appointments/:docId' element={<Appointment />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
