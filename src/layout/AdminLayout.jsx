import AdminSidebar from "../admin/AddSideBar";

const AdminLayout = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex">
      <AdminSidebar handleLogout={handleLogout} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default AdminLayout;
