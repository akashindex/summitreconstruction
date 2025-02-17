import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Homepage"; 
import Services from "./pages/Services";
import Contactpage from "./pages/Contactpage";
import Brandpage from "./pages/Brandpage";
import Holcombpage from "./pages/Holcombpage";
import Montclairpage from "./pages/Montclairpage";

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contactpage />} />
          <Route path="/Avebrand" element={<Brandpage />} />
          <Route path="/Holcomb" element={<Holcombpage />} />
          <Route path="/Montclair" element={<Montclairpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
