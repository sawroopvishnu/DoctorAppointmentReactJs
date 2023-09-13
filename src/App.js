import React from "react";
//import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./compoent/Navbar"
import PatientDashboard from "./compoent/PatientDashboard"
import DoctorDashboard from "./compoent/DoctorDashboard"
import Home from "./compoent/Home"
import Doctors from "./compoent/Doctors"
import CreateAppointment from "./compoent/CreateAppointment"
import Contact from "./compoent/Contact"
import Services from "./compoent/Services"
import Doctorlogin from "./compoent/Doctorlogin"
import DoctorRegister from "./compoent/DoctorRegister"
import PatientLogin from "./compoent/PatientLogin"
import PatientRegister from "./compoent/PatientRegister"
import Footer from "./compoent/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/doctors' compoent={Doctors} exact>
            <Doctors />
          </Route>
          <Route path='/createappointment' compoent={CreateAppointment} exact>
            <CreateAppointment />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' compoent={Services} exact>
            <Services />
            </Route>
            <Route path='/doctorlogin' compoent={Doctorlogin} exact>
            <Doctorlogin />
            </Route>
            <Route path='/doctorregister' compoent={DoctorRegister} exact>
            <DoctorRegister />
            </Route>
            <Route path='/patientlogin' compoent={PatientLogin} exact>
            <PatientLogin />
            </Route>
            <Route path='/patientregister' compoent={PatientRegister} exact>
            <PatientRegister />
            </Route>
             <Route path='/patientdashboard' compoent={PatientDashboard} exact>
            <PatientDashboard />
            </Route>  
            <Route path='/doctordashboard' compoent={DoctorDashboard} exact>
            <DoctorDashboard />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
