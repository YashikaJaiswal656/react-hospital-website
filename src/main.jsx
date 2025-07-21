import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import App from './App.jsx'
import About from './about.jsx';
import Service from './service.jsx';
import Contact from './contact.jsx';
import Department from './department.jsx';
import Doctor from './doctor.jsx';
import Doctor_detail from './doctor_detail.jsx';
import Appointment from './appointment.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Department' element={<Department/>}></Route>
      <Route path='/Doctor' element={<Doctor/>}></Route>
      <Route path='/Doctor_detail' element={<Doctor_detail/>}></Route>
      <Route path='/Appointment' element={<Appointment/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
