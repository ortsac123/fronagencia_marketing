import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home";
import Cases from "./containers/pages/Cases";
import Contacto from "./containers/pages/Contacto";
import Nosotros from "./containers/pages/Nosotros";
import Podcast from "./containers/pages/Podcast";
import Servicios from "./containers/pages/Servicios";
import Blog from "./containers/pages/Blog";
import Carreras from "./containers/pages/Carreras";
import Error404 from "./containers/errors/Error404";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/casos" element={<Cases />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carreras" element={<Carreras />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
