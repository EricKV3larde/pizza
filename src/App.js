import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { FooterBar } from "./components/footerbar.jsx";
import { Carro } from "./pages/carro/carro";
import { Tienda } from "./pages/tienda/tienda";
import { Login } from "./pages/login/login.jsx";
import { ShopContextProvider } from "./context/shop-context";
import { Slide } from "./pages/promos/slide.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/*o ponemos aqui para mostrarlo en todas las rutas, globalmente  */}
          <Routes>
            {/*aqui iran nuestras distintas paginas, tambien estamos llamando a los componentes */}
            <Route path="/" element={<Tienda/>} />
            <Route path="/Slide" element={<Slide />} />
            <Route path="/carro" element={<Carro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <FooterBar />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
