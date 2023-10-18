import React from 'react'
import Login from './Login'
import PatientData from './PatientData'
import FrequentSickness from './FrequentSickness'
import { Router, Route, Routes } from 'react-router-dom';

function RoutesPage() {
  return (
    <Router>
            <Routes>
                <Route exact pathname="/" component={Login} />
                <Route pathname="/patient-data" component={PatientData} />
                <Route pathname="/frequent-sickness" component={FrequentSickness} />
            </Routes>
    </Router>

  )
}

export default RoutesPage