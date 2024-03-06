import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Error from "./pages/Error/error";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/src/pages/Home" element={<Home />} />
        <Route path="/src/pages/Sobre" element={<Sobre />} />
        <Route path="/src/pages/Projetos" element={<Projetos />} />
        <Route path="/src/pages/Contato" element={<Contato />} />

        <Route path="/src/pages/Error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
