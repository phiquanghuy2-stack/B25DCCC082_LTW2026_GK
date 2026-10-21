const Home = ({ books }) => {
  const total = books.length;
  const borrowedCount = books.filter((b) => !b.available).length;
  const latestYear = books.reduce((max, b) => (b.year > max ? b.year : max), 0);

  return (
    <div>
      <h2 className="page-title">Thư viện sách</h2>
      <p className="page-subtitle">Chào mừng bạn đến với hệ thống quản lý thư viện khoa.</p>
      <div className="stats">
        <p className="stat-card">Tổng số sách: {total}</p>
        <p className="stat-card">Số sách đang cho mượn: {borrowedCount}</p>
        <p className="stat-card">Năm xuất bản mới nhất: {latestYear}</p>
      </div>
    </div>
  );
};

export default Home;
