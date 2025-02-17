import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Homepage"; 
import Services from "./pages/Services";

function App() {
  return (
    // check
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
