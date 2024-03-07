import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contato";
import Error from "./pages/Error/error";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/projetos",
        element: <Projetos />,
      },
      {
        path: "/contato",
        element: <Contatos />,
      },
    ],
  },
]);
