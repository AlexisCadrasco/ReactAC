import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Home} from './components/Home';
import {Clients} from './components/Clients';
import {Products} from './components/Products';
import { Service } from './components/Service';
import { Formulario } from './components/Formulario';

import Menu from './components/Menu';

function App() {
 
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/clients" element= {<Clients/>}/>
        <Route path="/products" element= {<Products/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
      </Routes>
    </Router>
  
  )
}

export default App
