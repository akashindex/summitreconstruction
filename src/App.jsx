import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Homepage";
import Services from "./pages/Services";
import Contactpage from "./pages/Contactpage";
import Brandpage from "./pages/Brandpage";
import Holcombpage from "./pages/Holcombpage";
import Montclairpage from "./pages/Montclairpage";
import Projectspage from "./pages/Projectspage";
import Courtyardpage from "./pages/Courtyardpage";
import Sorrentopage from "./pages/Sorrentopage";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import PrivateRoute from "./admin/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Site Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Services" element={<Layout><Services /></Layout>} />
        <Route path="/Contact" element={<Layout><Contactpage /></Layout>} />
        <Route path="/Avebrand" element={<Layout><Brandpage /></Layout>} />
        <Route path="/Holcomb" element={<Layout><Holcombpage /></Layout>} />
        <Route path="/Montclair" element={<Layout><Montclairpage /></Layout>} />
        <Route path="/projects" element={<Layout><Projectspage /></Layout>} />
        <Route path="/Courtyard" element={<Layout><Courtyardpage /></Layout>} />
        <Route path="/Sorrento" element={<Layout><Sorrentopage /></Layout>} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
