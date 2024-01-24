import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Carro } from './pages/carro/carro';
import { Tienda } from './pages/tienda/tienda';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        {/*o ponemos aqui para mostrarlo en todas las rutas, globalmente  */}
        <Routes>
          {/*aqui iran nuestras distintas paginas, tambien estamos llamando a los componentes */}
          <Route path="/" element={<Tienda />} />
          <Route path="/carro" element={<Carro />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
