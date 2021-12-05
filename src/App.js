import {Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar.js';
import Carrousel from './components/Carrousel.js';
import Formulario from './components/Formulario.js';
import Render3d from './components/Render3d.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
  <main>

    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Carrousel/>} />
      <Route path="/Render3d"  element={<Render3d/>}/>
      <Route path="/Formulario" element={<Formulario/>}/>

    </Routes>
  </main>
     
 
  
  );
}

export default App;
