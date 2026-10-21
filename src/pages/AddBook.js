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
      <h2 className="page-title">Thêm sách mới</h2>
      <form className="card form-card" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="title">Tên sách</label>
          <input id="title" name="title" type="text" value={form.title} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="author">Tác giả</label>
          <input id="author" name="author" type="text" value={form.author} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="year">Năm xuất bản</label>
          <input id="year" name="year" type="number" value={form.year} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="category">Thể loại</label>
          <select id="category" name="category" value={form.category} onChange={handleChange}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddBook;
