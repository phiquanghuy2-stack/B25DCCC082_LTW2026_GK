const BUILD_TAG = "qf-2817";
/* eslint-disable import/first */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Mounting: đọc dữ liệu đã lưu, nếu chưa có thì gọi API
  useEffect(() => {
    const saved = localStorage.getItem("gk_books");
    if (saved) {
      setBooks(JSON.parse(saved));
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    axios
      .get("/data/books.json", { signal: controller.signal })
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(true);
        setLoading(false);
      });

    // Unmounting: hủy request
    return () => controller.abort();
  }, []);

  // Updating: lưu dữ liệu khi đã tải xong
  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem("gk_books", JSON.stringify(books));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books, loading]);

  const addBook = (book) => {
    const maxId = books.reduce((max, b) => (b.id > max ? b.id : max), 0);
    setBooks([...books, { ...book, id: maxId + 1, available: true }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const toggleBook = (id) => {
    setBooks(books.map((b) => (b.id === id ? { ...b, available: !b.available } : b)));
  };

  return (
    <div className="app" data-build={BUILD_TAG}>
      <Routes>
        <Route path="/" element={<Layout loading={loading} error={error} />}>
          <Route index element={<Home books={books} />} />
          <Route
            path="books"
            element={<BookList books={books} onDelete={deleteBook} onToggle={toggleBook} />}
          />
          <Route path="books/new" element={<AddBook onAdd={addBook} />} />
          <Route path="books/:id" element={<BookDetail books={books} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
