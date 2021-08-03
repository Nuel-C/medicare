import { Login } from './components/Login'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Signup } from './components/Signup'
import { Dashboard } from './components/Dashboard';
import { Patients } from './components/Patients';
import { Encounters } from './components/Encounters';
import { PatientDetails } from './components/PatientDetails';
import { EncounterDetails } from './components/EncounterDetails';

function App() {
  return (
    <Router>
      <Route exact path='/' render={props=>(
        <div className="App">
          <Login />
        </div>
      )} />
      <Route exact path = '/signup' component = {Signup} />
      <Route exact path = '/dashboard' component = {Dashboard} />
      <Route exact path = '/patients' component = {Patients} />
      <Route exact path = '/encounters' component = {Encounters} />
      <Route exact path = '/patientdetails' component = {PatientDetails} />
      <Route exact path = '/encounterdetails' component = {EncounterDetails} />
    </Router>
  );
}

export default App;
