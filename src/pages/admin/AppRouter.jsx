import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import App from "./Dashboard";
import NotFound from "../../components/NotFound";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/admin/login" replace />;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      {/* 404 cho các route quản trị không hợp lệ */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
