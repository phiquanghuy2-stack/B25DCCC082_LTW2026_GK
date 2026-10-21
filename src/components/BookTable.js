import BookRow from "./BookRow";

const BookTable = ({ books, onDelete, onToggle }) => (
  <div className="table-wrap">
    <table className="book-table">
      <thead>
        <tr>
          <th>Tên sách</th>
          <th>Tác giả</th>
          <th>Năm</th>
          <th>Thể loại</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="6" className="empty">
              Không có dữ liệu
            </td>
          </tr>
        ) : (
          books.map((book) => (
            <BookRow key={book.id} book={book} onDelete={onDelete} onToggle={onToggle} />
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default BookTable;
