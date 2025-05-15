import { useState, useEffect, useRef } from "react";
import EventDetail from "../components/EventDetail";
import axios from "axios";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [localArticles, setLocalArticles] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 7;
  const eventsTitleRef = useRef(null);

  const topics = [
    { id: "tintuc", vi: "Tin tức", en: "News" },
    { id: "batdongsan", vi: "Kiến thức BĐS", en: "Real Estate Knowledge" },
    { id: "phaply", vi: "Pháp lý", en: "Legal" },
    { id: "trading", vi: "Kỹ thuật Trading", en: "Trading Techniques" },
    { id: "antoanhocduong", vi: "An toàn học đường", en: "School Safety" },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/dashboard");
        const sortedEvents = response.data.sort((a, b) => b.id - a.id);
        setEvents(sortedEvents);
      } catch (err) {
        setError("Lỗi khi lấy dữ liệu sự kiện");
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const response = await axios.get(
          "https://api.gocnhinthitruong.com/api/articles/tintuc"
        );
        setAllArticles(response.data);
      } catch (error) {
        console.error("Lỗi tải bài viết tintuc:", error);
      }
    };
    fetchAllArticles();
  }, []);

  useEffect(() => {
    const fetchLocalArticles = async () => {
      try {
        const localTopics = [
          "batdongsan",
          "phaply",
          "trading",
          "antoanhocduong",
        ];
        const promises = localTopics.map(async (topic) => {
          const response = await axios.get(
            `https://api.gocnhinthitruong.com/api/editor/articles/${topic}`
          );
          return { topic, data: response.data };
        });
        const results = await Promise.all(promises);
        const articlesByTopic = results.reduce((acc, { topic, data }) => {
          acc[topic] = data;
          return acc;
        }, {});
        setLocalArticles(articlesByTopic);
      } catch (error) {
        console.error("Lỗi tải bài viết từ localhost:", error);
      }
    };
    fetchLocalArticles();
  }, []);

  const handleArticleClick = (articleId) => {
    window.open(`https://gocnhinthitruong.com/article/${articleId}`, "_blank");
  };

  // Logic phân trang
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Cuộn đến div "events-title" khi chuyển trang
  useEffect(() => {
    if (eventsTitleRef.current) {
      eventsTitleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  return (
    <>
      {/* Header */}
      <div
        className="py-5"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          backgroundImage: "url(/images/law.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#fff",
          marginBottom: "0%",
        }}
      >
        <h1 className="text-center mb-4" style={{ fontSize: "3.5rem" }}>
          Tin tức và Sự kiện nổi bật của Justiva Law
        </h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4" style={{ textAlign: "center" }}>
            Justiva Law tự hào tổ chức và tham gia các sự kiện pháp lý, cộng
            đồng và đầu tư, góp phần kết nối doanh nghiệp, nhà đầu tư và cộng
            đồng để kiến tạo giá trị bền vững.
          </p>
        </div>
      </div>

      {/* Tin nổi bật */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="articles-wrapper container"
        style={{ textAlign: "center" }}
      >
        <h1 className="events-title">🔥TIN NỔI BẬT🔥</h1>

        <div className="articles-grid">
          {/* Khung lớn (2x2) */}
          {allArticles.length > 0 && (
            <div
              className="grid-element"
              onClick={() => handleArticleClick(allArticles[0]?.id)}
            >
              <img
                src={allArticles[0]?.thumbnail || ""}
                alt="Thumbnail"
                onError={(e) => (e.target.src = "/images/replace_error.jfif")}
              />
              <div className="overlay">
                <h2>{allArticles[0]?.title || ""}</h2>
              </div>
            </div>
          )}

          {/* Khung nhỏ (1x1) */}
          {topics.slice(1, 5).map((topic, index) => {
            const topicArticles = localArticles[topic.id] || [];
            return (
              topicArticles.length > 0 && (
                <div
                  key={index}
                  className="grid-element"
                  onClick={() => handleArticleClick(topicArticles[0]?.id)}
                >
                  <img
                    src={topicArticles[0]?.thumbnail || ""}
                    alt={topicArticles[0]?.title || ""}
                    onError={(e) =>
                      (e.target.src = "/images/replace_error.jfif")
                    }
                  />
                  <div className="overlay">
                    <h3>{topicArticles[0]?.title || ""}</h3>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>

      {/* Sự kiện nổi bật */}
      {error ? (
        <div className="alert alert-danger text-center container">
          Đã xảy ra lỗi khi tải dữ liệu.
        </div>
      ) : (
        <div
          className="events-wrapper container"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ textAlign: "center" }}
        >
          <div className="events-title" ref={eventsTitleRef}>
            <h1>SỰ KIỆN NỔI BẬT</h1>
          </div>
          {currentEvents.map((event, index) => (
            <EventDetail
              key={event.id}
              title={event.title}
              images={event.images}
              content={event.content}
              isOdd={index % 2 === 0}
            />
          ))}
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
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                style={{
                  margin: "0 5px",
                  padding: "8px 12px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  border: "1px solid #007bff",
                  borderRadius: "5%",
                  backgroundColor: "transparent",
                }}
              >
                Trước
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
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
                  </button>
                )
              )}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  margin: "0 5px",
                  padding: "8px 12px",
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                  border: "1px solid #007bff",
                  backgroundColor: "transparent",
                }}
              >
                Tiếp
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Events;
