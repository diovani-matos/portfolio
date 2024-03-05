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
        <Route path="/" element={<Home />}></Route>
        <Route path="/Sobre" element={<Sobre />}></Route>
        <Route path="/Projetos" element={<Projetos />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
