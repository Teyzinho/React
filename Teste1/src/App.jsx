import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homes from "./pages/Homes";
import Sobres from "./pages/Sobres";
import Contatos from "./pages/Contatos";
import Titulo from "./Titulo";


function App() {
  return (
    <div>

      {/* Sistema de roteamento */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/sobre" element={<Sobres />} />
          <Route path="/contato" element={<Contatos />} />
        </Routes>
      </BrowserRouter>

      {/* Teste de Props e Estado */}

      <Titulo nome="Francisco" paragrafo="true" cor="blue"/>
      <Titulo cor="red"/>
      <Titulo cor="purple"/>

    </div>
  )
}
export default App