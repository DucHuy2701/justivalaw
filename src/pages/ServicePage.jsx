import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

function ServicePage() {
  const { language } = useContext(LanguageContext);
  const { topic } = useParams();

  // Đối tượng bản dịch
  const translations = {
    vi: {
      services: {
        "business-strategy": {
          title: "Hoạch định chiến lược pháp lý cho doanh nghiệp",
          images: [
            "/images/service/hdcl3.jpg",
            "/images/service/hdcl2.jpg",
            "/images/service/hdcl.jpg",
          ],
          content: (
            <div>
              <p>
                Tư vấn chiến lược pháp lý gắn liền với chiến lược kinh doanh và tài
                chính, giúp doanh nghiệp tối ưu hóa vận hành và phát triển.
              </p>
              <ul>
                <li>Xây dựng khung pháp lý cho hoạt động kinh doanh.</li>
                <li>Tối ưu hóa quy trình pháp lý nội bộ.</li>
                <li>Hỗ trợ hoạch định dài hạn để giảm rủi ro pháp lý.</li>
              </ul>
            </div>
          ),
        },
        "mergers-acquisitions": {
          title: "Tư vấn M&A",
          images: [
            "/images/service/ma.png",
            "/images/service/ma2.png",
            "/images/service/ma4.jpg",
          ],
          content: (
            <div>
              <p>
                Hỗ trợ các giao dịch mua bán và sáp nhập (M&A) trong nhiều lĩnh vực
                như doanh nghiệp, công nghệ, bất động sản, khu công nghiệp, cảng
                biển.
              </p>
              <ul>
                <li>Rà soát pháp lý đối tượng M&A.</li>
                <li>Thiết lập kế hoạch và chiến lược M&A.</li>
                <li>Hỗ trợ triển khai giao dịch trong và ngoài nước.</li>
              </ul>
            </div>
          ),
        },
        "foreign-investment": {
          title: "Đầu tư nước ngoài tại Việt Nam",
          images: [
            "/images/service/dtnn1.png",
            "/images/service/dtnn2.png",
            "/images/service/dtnn4.jpg",
          ],
          content: (
            <div>
              <p>
                Tư vấn và hỗ trợ nhà đầu tư nước ngoài tại Việt Nam, từ thành lập
                pháp nhân đến các hợp đồng phức tạp.
              </p>
              <ul>
                <li>Thành lập pháp nhân mới, góp vốn, mua cổ phần.</li>
                <li>Hỗ trợ hợp đồng PPP, BCC.</li>
                <li>
                  Tư vấn điều kiện kinh doanh đặc thù (kế toán, y tế, giáo dục).
                </li>
              </ul>
            </div>
          ),
        },
        "real-estate": {
          title: "Pháp lý bất động sản",
          images: [
            "/images/service/bds1.jpg",
            "/images/service/bds2.jpg",
            "/images/service/bds3.jpg",
          ],
          content: (
            <div>
              <p>
                Tư vấn pháp lý toàn diện cho các dự án bất động sản trong và ngoài
                nước.
              </p>
              <ul>
                <li>Lập hồ sơ xin quyết định chủ trương đầu tư.</li>
                <li>Hỗ trợ giải phóng mặt bằng, soạn thảo hợp đồng.</li>
                <li>Tư vấn huy động vốn và làm việc với nhà thầu.</li>
              </ul>
            </div>
          ),
        },
        restructuring: {
          title: "Tái cấu trúc doanh nghiệp",
          images: [
            "/images/service/tct2.jpg",
            "/images/service/tct3.png",
            "/images/service/tct4.png",
          ],
          content: (
            <div>
              <p>
                Hỗ trợ tái cấu trúc tổ chức, cổ đông, hoặc sau M&A để chuẩn bị cho
                IPO hoặc phát hành trái phiếu.
              </p>
              <ul>
                <li>Tái cấu trúc pháp lý nội bộ.</li>
                <li>Tư vấn thay đổi cơ cấu cổ đông.</li>
                <li>Hỗ trợ chuẩn bị hồ sơ IPO.</li>
              </ul>
            </div>
          ),
        },
        "legal-consulting": {
          title: "Tư vấn pháp lý thường xuyên",
          images: [
            "/images/service/tvpl1.jpg",
            "/images/service/tvpl2.png",
            "/images/service/tvpl2.jpg",
          ],
          content: (
            <div>
              <p>
                Ngăn ngừa rủi ro pháp lý và bảo vệ doanh nghiệp trong hoạt động hàng
                ngày.
              </p>
              <ul>
                <li>Xây dựng khung pháp lý vận hành.</li>
                <li>Bảo vệ tài sản hữu hình và vô hình.</li>
                <li>Chuẩn bị trạng thái pháp lý để huy động vốn.</li>
              </ul>
            </div>
          ),
        },
        litigation: {
          title: "Tranh tụng",
          images: [
            "/images/service/tt1.jpg",
            "/images/service/tt3.png",
            "/images/service/tt2.png",
          ],
          content: (
            <div>
              <p>
                Đại diện khách hàng tại tòa án và trung tâm trọng tài trong các
                tranh chấp pháp lý.
              </p>
              <ul>
                <li>Tranh chấp tài sản, kinh doanh, thương mại.</li>
                <li>Tranh chấp đầu tư, hôn nhân, gia đình, thừa kế.</li>
                <li>Hỗ trợ tại tòa án Việt Nam và quốc tế.</li>
              </ul>
            </div>
          ),
        },
        "will-inheritance": {
          title: "Lưu trữ di chúc và phân chia thừa kế",
          images: [
            "/images/service/ltdc2.jpg",
            "/images/service/ltdc.jpg",
            "/images/service/ltdc3.jpg",
          ],
          content: (
            <div>
              <p>
                Tư vấn, soạn thảo, lưu trữ di chúc và giải quyết tranh chấp thừa kế.
              </p>
              <ul>
                <li>Lưu trữ di chúc điện tử với công nghệ hiện đại.</li>
                <li>Giải quyết tranh chấp về bất động sản, sở hữu trí tuệ.</li>
                <li>Bảo vệ quyền lợi liên quan đến thừa kế.</li>
              </ul>
            </div>
          ),
        },
        other: {
          title: "Dịch vụ khác",
          images: [
            "/images/service/dvk1.png",
            "/images/service/dvk3.png",
            "/images/service/dvk4.png",
          ],
          content: (
            <div>
              <p>
                Các dịch vụ pháp lý đa dạng, đáp ứng nhu cầu đặc thù của khách hàng.
              </p>
              <ul>
                <li>Thành lập doanh nghiệp ở nước ngoài (offshore).</li>
                <li>Tư vấn định cư và đầu tư bất động sản quốc tế.</li>
                <li>Đào tạo pháp lý theo yêu cầu.</li>
              </ul>
            </div>
          ),
        },
      },
    },
    en: {
      services: {
        "business-strategy": {
          title: "Strategic Legal Planning for Businesses",
          images: [
            "/images/service/hdcl3.jpg",
            "/images/service/hdcl2.jpg",
            "/images/service/hdcl.jpg",
          ],
          content: (
            <div>
              <p>
                Strategic legal consulting is closely aligned with business and financial strategies, helping enterprises optimize operations and drive sustainable growth.
              </p>
              <ul>
                <li>Develop a legal framework for business operations.</li>
                <li>Streamline internal legal processes.</li>
                <li>Supporting long-term planning to mitigate legal risks.</li>
              </ul>
            </div>
          ),
        },
        "mergers-acquisitions": {
          title: "M&A Advisory Services",
          images: [
            "/images/service/ma.png",
            "/images/service/ma2.png",
            "/images/service/ma4.jpg",
          ],
          content: (
            <div>
              <p>
                We provide support for mergers and acquisitions (M&A) across various sectors including corporate, technology, real estate, industrial zones, and seaports.
              </p>
              <ul>
                <li>Conduct legal due diligence on M&A targets.</li>
                <li>Develop M&A plans and strategies.</li>
                <li>Assist in executing domestic and cross-border transactions.</li>
              </ul>
            </div>
          ),
        },
        "foreign-investment": {
          title: "Foreign Investment in Vietnam",
          images: [
            "/images/service/dtnn1.png",
            "/images/service/dtnn2.png",
            "/images/service/dtnn4.jpg",
          ],
          content: (
            <div>
              <p>
                We provide legal consultancy and support for foreign investors in Vietnam, from entity formation to handling complex agreements.
              </p>
              <ul>
                <li>Establish new legal entities, contribute capital, or acquire shares.</li>
                <li>Support with PPP and BCC contracts.</li>
                <li>
                  Advise on special business conditions (e.g., accounting, healthcare, education).
                </li>
              </ul>
            </div>
          ),
        },
        "real-estate": {
          title: "Real Estate Legal Services",
          images: [
            "/images/service/bds1.jpg",
            "/images/service/bds2.jpg",
            "/images/service/bds3.jpg",
          ],
          content: (
            <div>
              <p>
                We offer comprehensive legal consultancy for real estate projects both domestically and internationally.
              </p>
              <ul>
                <li>Prepare documentation to obtain investment approval decisions.</li>
                <li>Support land clearance and draft contracts.</li>
                <li>Advise on capital mobilization and work with contractors.</li>
              </ul>
            </div>
          ),
        },
        restructuring: {
          title: "Corporate Restructuring",
          images: [
            "/images/service/tct2.jpg",
            "/images/service/tct3.png",
            "/images/service/tct4.png",
          ],
          content: (
            <div>
              <p>
                We provide support for restructuring organizations, shareholders, or post-M&A integration in preparation for IPOs or bond issuances.
              </p>
              <ul>
                <li>Internal legal restructuring.</li>
                <li>Advisory on shareholder structure changes.</li>
                <li>IPO documentation support.</li>
              </ul>
            </div>
          ),
        },
        "legal-consulting": {
          title: "Ongoing Legal Consultancy",
          images: [
            "/images/service/tvpl1.jpg",
            "/images/service/tvpl2.png",
            "/images/service/tvpl2.jpg",
          ],
          content: (
            <div>
              <p>
                Prevent legal risks and protect businesses in their daily operations.
              </p>
              <ul>
                <li>Develop operational legal frameworks.</li>
                <li>Protect tangible and intangible assets.</li>
                <li>Prepare legal conditions for fundraising.</li>
              </ul>
            </div>
          ),
        },
        litigation: {
          title: "Litigation",
          images: [
            "/images/service/tt1.jpg",
            "/images/service/tt3.png",
            "/images/service/tt2.png",
          ],
          content: (
            <div>
              <p>
                We represent clients in courts and arbitration centers in legal disputes.
              </p>
              <ul>
                <li>Asset, business, and commercial disputes.</li>
                <li>Investment, marriage, family, and inheritance disputes.</li>
                <li>Legal support in both Vietnamese and international courts.</li>
              </ul>
            </div>
          ),
        },
        "will-inheritance": {
          title: "Will Storage and Inheritance Distribution",
          images: [
            "/images/service/ltdc2.jpg",
            "/images/service/ltdc.jpg",
            "/images/service/ltdc3.jpg",
          ],
          content: (
            <div>
              <p>
                Consulting, drafting, storing wills, and resolving inheritance disputes.
              </p>
              <ul>
                <li>Store digital wills using modern technology.</li>
                <li>Resolve disputes related to real estate and intellectual property.</li>
                <li>Protect inheritance-related rights and interests.</li>
              </ul>
            </div>
          ),
        },
        other: {
          title: "Other Legal Services",
          images: [
            "/images/service/dvk1.png",
            "/images/service/dvk3.png",
            "/images/service/dvk4.png",
          ],
          content: (
            <div>
              <p>
                A wide range of legal services tailored to meet clients’ specific needs:
              </p>
              <ul>
                <li>Establishing offshore companies.</li>
                <li>Consulting on immigration and international real estate investment.</li>
                <li>Customized legal training upon request.</li>
              </ul>
            </div>
          ),
        },
      },
    },
  };

  const serviceContent = translations[language].services;
  const service = serviceContent[topic];

  // Nếu topic không tồn tại, chuyển hướng đến trang NotFound
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className="service-page">
      <div
        className="container service-detail"
        style={{
          textAlign: "center",
        }}
      >
        {/* Tiêu đề dịch vụ */}
        <h1>{service.title}</h1>
        {/* Lưới hình ảnh */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          {/* Hình 1: chiếm 2 grid bên trái */}
          <div
            style={{
              gridRow: "1 / 3",
              gridColumn: "1 / 2",
              objectFit: "cover",
            }}
          >
            <img
              src={service.images[0]}
              alt={`${service.title} main image`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Hình 2: grid trên bên phải */}
          <div
            style={{
              gridRow: "1 / 2",
              gridColumn: "2 / 3",
              objectFit: "cover",
            }}
          >
            <img
              src={service.images[1]}
              alt={`${service.title} secondary image 1`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Hình 3: grid dưới bên phải */}
          <div
            style={{
              gridRow: "2 / 3",
              gridColumn: "2 / 3",
              objectFit: "cover",
            }}
          >
            <img
              src={service.images[2]}
              alt={`${service.title} secondary image 2`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Nội dung chi tiết dịch vụ */}
        <div
          className="service-content"
          style={{
            textAlign: "justify",
            padding: "0 5% 0 5%",
            fontSize: "1.5rem",
          }}
        >
          {service.content}
        </div>
      </div>
    </section>
  );
}

export default ServicePage;