import { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import EventDetail from "../components/EventDetail";
import axios from "axios";
import "./Events.css";

function Events() {
  const { language } = useContext(LanguageContext);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [localArticles, setLocalArticles] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 7;
  const eventsTitleRef = useRef(null);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      header: {
        title: "Tin tức và Sự kiện nổi bật của Justiva Law",
        description:
          "Justiva Law tự hào tổ chức và tham gia các sự kiện pháp lý, cộng đồng và đầu tư, góp phần kết nối doanh nghiệp, nhà đầu tư và cộng đồng để kiến tạo giá trị bền vững.",
      },
      featuredNews: {
        title: "🔥TIN NỔI BẬT🔥",
      },
      featuredEvents: {
        title: "SỰ KIỆN NỔI BẬT",
      },
      error: "Đã xảy ra lỗi khi tải dữ liệu.",
      pagination: {
        prev: "Trước",
        next: "Tiếp",
        page: "Trang",
      },
      topics: [
        { id: "tintuc", name: "Tin tức" },
        { id: "batdongsan", name: "Kiến thức BĐS" },
        { id: "phaply", name: "Pháp lý" },
        { id: "trading", name: "Kỹ thuật Trading" },
        { id: "antoanhocduong", name: "An toàn học đường" },
      ],
    },
    en: {
      header: {
        title: "News and Featured Events of Justiva Law",
        description:
          "Justiva Law proudly organizes and participates in legal, community, and investment events, fostering connections among businesses, investors, and communities to create sustainable value.",
      },
      featuredNews: {
        title: "🔥FEATURED NEWS🔥",
      },
      featuredEvents: {
        title: "FEATURED EVENTS",
      },
      error: "An error occurred while loading data.",
      pagination: {
        prev: "Previous",
        next: "Next",
        page: "Page",
      },
      topics: [
        { id: "tintuc", name: "News" },
        { id: "batdongsan", name: "Real Estate Knowledge" },
        { id: "phaply", name: "Legal" },
        { id: "trading", name: "Trading Techniques" },
        { id: "antoanhocduong", name: "School Safety" },
      ],
    },
  };

  const t = translations[language];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://api.justivalaw.com/api/dashboard");
        const sortedEvents = response.data.sort((a, b) => b.id - a.id);
        setEvents(sortedEvents);
      } catch (err) {
        setError(t.error);
      }
    };
    fetchEvents();
  }, [t.error]);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const response = await axios.get(
          "https://api.gocnhinthitruong.com/api/articles/tintuc"
        );
        setAllArticles(response.data);
      } catch (error) {
        console.error("Error loading tintuc articles:", error);
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
        console.error("Error loading articles from server:", error);
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

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

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
          {t.header.title}
        </h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4" style={{ textAlign: "center" }}>
            {t.header.description}
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
        <h1 className="events-title">{t.featuredNews.title}</h1>

        <div className="articles-grid">
          {/* Khung lớn (2x2) */}
          {allArticles.length > 0 && (
            <div
              className="grid-element"
              onClick={() => handleArticleClick(allArticles[0]?.id)}
            >
              <img
                src={allArticles[0]?.thumbnail || ""}
                alt={allArticles[0]?.title || "Featured News"}
                onError={(e) => (e.target.src = "/images/replace_error.jfif")}
              />
              <div className="overlay">
                <h2>{allArticles[0]?.title || ""}</h2>
              </div>
            </div>
          )}

          {/* Khung nhỏ (1x1) */}
          {t.topics.slice(1, 5).map((topic, index) => {
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
                    alt={topicArticles[0]?.title || topic.name}
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
        <div className="alert alert-danger text-center container" role="alert">
          {t.error}
        </div>
      ) : (
        <div
          className="events-wrapper container"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ textAlign: "center" }}
        >
          <div className="events-title" ref={eventsTitleRef}>
            <h1>{t.featuredEvents.title}</h1>
          </div>
          {currentEvents.map((event, index) => (
            <EventDetail
              key={event.id}
              title={language === "vi" ? event.title_vi : event.title_en}
              images={event.images}
              content={language === "vi" ? event.content_vi : event.content_en}
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
                marginBottom: "3%",
              }}
            >
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label={currentPage === 1 ? `${t.pagination.prev} disabled` : t.pagination.prev}
                style={{
                  margin: "0 5px",
                  padding: "8px 12px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  border: "1px solid #007bff",
                  borderRadius: "10%",
                  backgroundColor: "transparent",
                  width: "110px",
                }}
              >
                {t.pagination.prev}
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-label={currentPage === page ? `${t.pagination.page} ${page} selected` : `${t.pagination.page} ${page}`}
                    style={{
                      margin: "0 5px",
                      padding: "8px 12px",
                      backgroundColor:
                        currentPage === page ? "#007bff" : "transparent",
                      color: currentPage === page ? "#fff" : "#000",
                      border: "1px solid #007bff",
                      cursor: "pointer",
                      borderRadius: "10%",
                    }}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label={currentPage === totalPages ? `${t.pagination.next} disabled` : t.pagination.next}
                style={{
                  margin: "0 5px",
                  padding: "8px 12px",
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                  border: "1px solid #007bff",
                  backgroundColor: "transparent",
                  borderRadius: "10%",
                  width: "110px",
                }}
              >
                {t.pagination.next}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Events;