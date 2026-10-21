const Home = ({ books }) => {
  const total = books.length;
  const borrowedCount = books.filter((b) => !b.available).length;
  const latestYear = books.reduce((max, b) => (b.year > max ? b.year : max), 0);

  return (
    <div>
      <h2 className="page-title">Thư viện sách</h2>
      <p className="page-subtitle">Chào mừng bạn đến với hệ thống quản lý thư viện khoa.</p>
      <div className="stats">
        <p className="stat-card">
          <span className="stat-label">Tổng số sách:</span> <strong className="stat-value">{total}</strong>
        </p>
        <p className="stat-card">
          <span className="stat-label">Số sách đang cho mượn:</span>{" "}
          <strong className="stat-value">{borrowedCount}</strong>
        </p>
        <p className="stat-card">
          <span className="stat-label">Năm xuất bản mới nhất:</span>{" "}
          <strong className="stat-value">{latestYear}</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
