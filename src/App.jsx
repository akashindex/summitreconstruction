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
import Centralparkpage from "./pages/Centralparkpage";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import PrivateRoute from "./admin/PrivateRoute";
import AllProjects from "./admin/AllProjects";
import AddService from "./admin/AddServices";
import Projects from "./component/Reconstruction/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Site Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contactpage />
            </Layout>
          }
        />
        <Route
          path="/avebrand"
          element={
            <Layout>
              <Brandpage />
            </Layout>
          }
        />
        <Route
          path="/holcomb"
          element={
            <Layout>
              <Holcombpage />
            </Layout>
          }
        />
        <Route
          path="/montclair"
          element={
            <Layout>
              <Montclairpage />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projectspage />
            </Layout>
          }
        />
        <Route
          path="/courtyard"
          element={
            <Layout>
              <Courtyardpage />
            </Layout>
          }
        />
        <Route
          path="/sorrento"
          element={
            <Layout>
              <Sorrentopage />
            </Layout>
          }
        />
        <Route
          path="/centralpark"
          element={
            <Layout>
              <Centralparkpage />
            </Layout>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add-service" element={<AddService />} />

        {/* Private Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-service"
          element={
            <PrivateRoute>
              <AdminLayout>
                <AddService />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/project"
          element={
            <PrivateRoute>
              <AdminLayout>
                <AllProjects />
              </AdminLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
