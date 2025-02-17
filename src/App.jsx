import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Homepage"; 
import Services from "./pages/Services";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contactpage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
