import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../data";

const AddBook = ({ onAdd }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    category: "Văn học",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, year, category } = form;

    if (!title.trim() || !author.trim() || year === "") {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const yearNum = Number(year);
    if (!Number.isInteger(yearNum) || yearNum < 1900 || yearNum > 2026) {
      setError("Năm xuất bản phải từ 1900 đến 2026");
      return;
    }

    onAdd({ title: title.trim(), author: author.trim(), year: yearNum, category });
    navigate("/books", { replace: true });
  };

  return (
    <div>
      <h2>Thêm sách mới</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="title">Tên sách</label>
          <input id="title" name="title" type="text" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="author">Tác giả</label>
          <input id="author" name="author" type="text" value={form.author} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="year">Năm xuất bản</label>
          <input id="year" name="year" type="number" value={form.year} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Thể loại</label>
          <select id="category" name="category" value={form.category} onChange={handleChange}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddBook;
