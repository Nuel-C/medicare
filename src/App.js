import { Login } from './components/Login'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Signup } from './components/Signup'
import { Dashboard } from './components/Dashboard';

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
    </Router>
  );
}

export default App;
