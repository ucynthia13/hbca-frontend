import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import './App.css';
import Login from './components/Login';

import FrequentSickness from './components/FrequentSickness';
import PatientData from './components/PatientData';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <FrequentSickness />
      <PatientData />
    </div>
  );
}

export default App;
