import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Error from './Pages/Error';
import Formulario from './Pages/Formulario';
import Home from './Pages/Home';
import Productos from './Pages/Productos';
import Api from './Pages/Api';
import Otro from './Pages/Otro';
import Navbar from './Componentes/Navbar';
import Layout from './Componentes/Layout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/api' element={<Api />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/otro' element={<Otro />} />
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
