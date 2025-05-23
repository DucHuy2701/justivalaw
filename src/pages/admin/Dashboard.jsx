import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Modal, Table, Alert } from "react-bootstrap";
import axios from "axios";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [titleVi, setTitleVi] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentVi, setContentVi] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const eventsPerPage = 7;
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://api.justivalaw.com/api/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEvents(response.data);
      } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          setError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
          setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/admin/login");
          }, 2000);
        } else {
          setError(error.response?.data?.error || "Lỗi khi lấy sự kiện");
        }
      }
    };
    if (token) {
      fetchEvents();
    } else {
      setError("Vui lòng đăng nhập để truy cập.");
      setTimeout(() => navigate("/admin/login"), 2000);
    }
  }, [token, navigate]);

  const handleAddOrUpdateEvent = async (e) => {
    e.preventDefault();
    if (!titleVi || !titleEn || !contentVi || !contentEn) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title_vi", titleVi);
      formData.append("title_en", titleEn);
      formData.append("content_vi", contentVi);
      formData.append("content_en", contentEn);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      const url = editingId
        ? `https://api.justivalaw.com/api/dashboard/${editingId}`
        : "https://api.justivalaw.com/api/dashboard";
      const method = editingId ? "put" : "post";
      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      if (editingId) {
        setEvents(
          events.map((event) => (event.id === editingId ? data : event))
        );
      } else {
        setEvents([...events, data]);
      }

      setTitleVi("");
      setTitleEn("");
      setContentVi("");
      setContentEn("");
      setImages([]);
      setEditingId(null);
      setIsModalOpen(false);
      setError("");
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        setError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
        setTimeout(() => {
          localStorage.removeItem("token");
          navigate("/admin/login");
        }, 2000);
      } else {
        setError(error.response?.data?.error || "Lỗi khi lưu sự kiện");
      }
    }
  };

  const handleEdit = (event) => {
    setTitleVi(event.title_vi);
    setTitleEn(event.title_en);
    setContentVi(event.content_vi);
    setContentEn(event.content_en);
    setEditingId(event.id);
    setIsModalOpen(true);
    setError("");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sự kiện này?")) {
      try {
        await axios.delete(`https://api.justivalaw.com/api/dashboard/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(events.filter((event) => event.id !== id));
        setError("");
      } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          setError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
          setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/admin/login");
          }, 2000);
        } else {
          setError(error.response?.data?.error || "Lỗi khi xóa sự kiện");
        }
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTitleVi("");
    setTitleEn("");
    setContentVi("");
    setContentEn("");
    setImages([]);
    setEditingId(null);
    setError("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  // Logic tìm kiếm
  const filteredEvents = events.filter(
    (event) =>
      event.title_vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.content_vi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.content_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic phân trang
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset trang về 1 khi searchTerm thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-vh-100 bg-light">
      <header className="bg-primary text-white p-4 shadow d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Quản lý sự kiện</h1>
        <Button variant="danger" onClick={handleLogout}>
          Đăng xuất
        </Button>
      </header>
      <main className="container py-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Button onClick={() => setIsModalOpen(true)} variant="primary">
            Thêm sự kiện
          </Button>
          <Form.Group className="w-50">
            <Form.Control
              type="text"
              placeholder="Tìm kiếm theo chủ đề hoặc nội dung..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </div>

        <Modal show={isModalOpen} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingId ? "Sửa sự kiện" : "Thêm sự kiện"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddOrUpdateEvent}>
              <Form.Group className="mb-3">
                <Form.Label>Chủ đề (Tiếng Việt)</Form.Label>
                <Form.Control
                  type="text"
                  value={titleVi}
                  onChange={(e) => setTitleVi(e.target.value)}
                  placeholder="Nhập chủ đề sự kiện bằng tiếng Việt"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Chủ đề (Tiếng Anh)</Form.Label>
                <Form.Control
                  type="text"
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  placeholder="Nhập chủ đề sự kiện bằng tiếng Anh"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nội dung (Tiếng Việt)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={contentVi}
                  onChange={(e) => setContentVi(e.target.value)}
                  placeholder="Nhập nội dung sự kiện bằng tiếng Việt"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nội dung (Tiếng Anh)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={contentEn}
                  onChange={(e) => setContentEn(e.target.value)}
                  placeholder="Nhập nội dung sự kiện bằng tiếng Anh"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setImages(Array.from(e.target.files))}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {editingId ? "Cập nhật" : "Thêm"}
              </Button>
              <Button
                variant="secondary"
                className="ms-2"
                onClick={handleCancel}
              >
                Hủy
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Chủ đề (VI)</th>
              <th>Chủ đề (EN)</th>
              <th>Nội dung (VI)</th>
              <th>Nội dung (EN)</th>
              <th>Hình ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title_vi}</td>
                <td>{event.title_en}</td>
                <td>{event.content_vi}</td>
                <td>{event.content_en}</td>
                <td>
                  {event.images.length > 0
                    ? event.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={
                            img.startsWith("/uploads/")
                              ? `https://api.justivalaw.com${img}`
                              : img
                          }
                          alt={`event-${event.id}-image-${idx + 1}`}
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "5px",
                          }}
                        />
                      ))
                    : "Không có ảnh"}
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(event)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(event.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Phân trang */}
        {totalPages > 1 && (
          <div
            className="pagination"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              style={{
                margin: "0 5px",
                padding: "8px 12px",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                border: "1px solid #007bff",
                backgroundColor: "#007bff",
              }}
            >
              Trước
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  margin: "0 5px",
                  padding: "8px 12px",
                  backgroundColor:
                    currentPage === page ? "#007bff" : "transparent",
                  color: currentPage === page ? "#fff" : "#000",
                  border: "1px solid #007bff",
                  cursor: "pointer",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                margin: "0 5px",
                padding: "8px 12px",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                border: "1px solid #007bff",
                backgroundColor: "#007bff",
              }}
            >
              Tiếp
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
