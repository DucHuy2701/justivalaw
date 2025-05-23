import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import Technology from "./pages/Technology";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Vision from "./pages/Vision";
import Loading from "./components/Loading";
import AppRouter from "./pages/admin/AppRouter";
import NotFound from "./components/NotFound";
import Captcha from "./components/Captcha";
import { LanguageProvider } from "./components/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Component layout cho các trang công khai
const PublicLayout = () => {
  return (
    <>
      <LanguageSwitcher /> {/* Đặt LanguageSwitcher ngoài Captcha */}
      <Captcha>
        <Header />
        <Navbar /> {/* Navbar không chứa LanguageSwitcher nữa */}
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </Captcha>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      {" "}
      {/* Bọc toàn bộ ứng dụng trong LanguageProvider */}
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          {/* Route cho trang loading */}
          <Route path="/" element={<Loading />} />

          {/* Route cho các trang công khai với layout */}
          <Route element={<PublicLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:topic" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/vision" element={<Vision />} />
            {/* 404 cho các route công khai không hợp lệ */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Route cho các trang quản trị */}
          <Route path="/admin/*" element={<AppRouter />} />

          {/* 404 cho các route gốc không hợp lệ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
