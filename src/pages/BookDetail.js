import { useParams, useNavigate } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div>
        <p>Không tìm thấy sách</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  const { title, author, year, category, available } = book;

  return (
    <div>
      <h2>Chi tiết sách</h2>
      <p>Tên sách: {title}</p>
      <p>Tác giả: {author}</p>
      <p>Năm xuất bản: {year}</p>
      <p>Thể loại: {category}</p>
      <p>Trạng thái: {available ? "Có sẵn" : "Đang mượn"}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default BookDetail;
