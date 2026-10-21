import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import BookTable from "../components/BookTable";

const BookList = ({ books, onDelete, onToggle }) => {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [category, setCategory] = useState("Tất cả");

  // Chờ ngừng gõ 0,5 giây mới cập nhật từ khóa dùng để lọc
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);
    return () => clearTimeout(timer);
  }, [keyword]);

  const handleQueryShift = (e) => setKeyword(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const searchText = debouncedKeyword.trim().toLowerCase();
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchText) &&
      (category === "Tất cả" || b.category === category)
  );

  return (
    <div>
      <h2 className="page-title">Danh sách sách</h2>
      <FilterBar
        keyword={keyword}
        category={category}
        searching={keyword !== debouncedKeyword}
        handleQueryShift={handleQueryShift}
        onCategoryChange={handleCategoryChange}
      />
      <p className="result-count">{`Tìm thấy ${filtered.length} cuốn sách`}</p>
      <BookTable books={filtered} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default BookList;
