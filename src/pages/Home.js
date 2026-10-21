const Home = ({ books }) => {
  const total = books.length;
  const borrowedCount = books.filter((b) => !b.available).length;
  const latestYear = books.reduce((max, b) => (b.year > max ? b.year : max), 0);

  return (
    <div>
      <h2>Thư viện sách</h2>
      <p>Tổng số sách: {total}</p>
      <p>Số sách đang cho mượn: {borrowedCount}</p>
      <p>Năm xuất bản mới nhất: {latestYear}</p>
    </div>
  );
};

export default Home;
