import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ loading, error }) => (
  <div>
    <header className="header">
      <div className="container header-inner">
        <span className="brand">Thư viện khoa</span>
        <NavBar />
      </div>
    </header>
    <main className="container content">
      {loading ? (
        <p className="message">Đang tải...</p>
      ) : error ? (
        <p className="message message-error">Không tải được dữ liệu</p>
      ) : (
        <Outlet />
      )}
    </main>
  </div>
);

export default Layout;
