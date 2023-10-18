import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
  
import FrequentSickness from './components/FrequentSickness';
import PatientData from './components/PatientData';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <PatientData />
      <FrequentSickness />
    </div>
  );
}

export default App;
