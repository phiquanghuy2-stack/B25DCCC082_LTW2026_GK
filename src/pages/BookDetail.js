import { useParams, useNavigate } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="card detail-card">
        <p className="message message-error">Không tìm thấy sách</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    );
  }

  const { title, author, year, category, available } = book;

  return (
    <div>
      <h2 className="page-title">Chi tiết sách</h2>
      <div className="card detail-card">
        <p className="detail-row">
          <span className="detail-label">Tên sách:</span> {title}
        </p>
        <p className="detail-row">
          <span className="detail-label">Tác giả:</span> {author}
        </p>
        <p className="detail-row">
          <span className="detail-label">Năm xuất bản:</span> {year}
        </p>
        <p className="detail-row">
          <span className="detail-label">Thể loại:</span> {category}
        </p>
        <p className="detail-row">
          <span className="detail-label">Trạng thái:</span>{" "}
          <span className={`badge ${available ? "badge-ok" : "badge-borrowed"}`}>
            {available ? "Có sẵn" : "Đang mượn"}
          </span>
        </p>
        <div className="detail-actions">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
