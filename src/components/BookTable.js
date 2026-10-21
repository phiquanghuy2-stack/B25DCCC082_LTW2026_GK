import BookRow from "./BookRow";

const BookTable = ({ books, onDelete, onToggle }) => (
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
          <td colSpan="6">Không có dữ liệu</td>
        </tr>
      ) : (
        books.map((book) => (
          <BookRow key={book.id} book={book} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
    </tbody>
  </table>
);

export default BookTable;
