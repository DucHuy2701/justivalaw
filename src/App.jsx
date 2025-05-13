/* Nhập Routes, Route từ react-router-dom để định nghĩa router */
import { Routes, Route } from "react-router-dom";
/* Nhập các component cho layout và trang */
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

/* Component chính của ứng dụng */
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Routes>
        {/* Route cho Loading */}
        <Route path="/" element={<Loading />} />
        {/* Các route khác với layout đầy đủ */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Navbar />
              <main className="flex-grow-1">
                <Routes>
                  {/* Route cho trang chủ */}
                  <Route path="/home" element={<Home />} />
                  {/* Route cho trang giới thiệu */}
                  <Route path="/about" element={<About />} />
                  {/* Route cho trang chi tiết dịch vụ theo topic */}
                  <Route path="/services/:topic" element={<ServicePage />} />
                  {/* Route cho trang liên hệ */}
                  <Route path="/contact" element={<Contact />} />
                  {/* Route cho trang công nghệ */}
                  <Route path="/technology" element={<Technology />} />
                  {/* Route cho trang sự kiện */}
                  <Route path="/events" element={<Events />} />
                  {/* Route cho trang hành trình và thành tựu */}
                  <Route path="/achievements" element={<Achievements />} />
                  {/* Route cho trang tầm nhìn và sứ mệnh */}
                  <Route path="/vision" element={<Vision />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

/* Xuất component App */
export default App;
