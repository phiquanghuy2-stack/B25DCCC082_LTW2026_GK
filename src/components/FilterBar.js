import { CATEGORIES } from "../data";

const FilterBar = ({ keyword, category, searching, handleQueryShift, onCategoryChange }) => (
  <div className="filter-bar">
    <div className="field">
      <label htmlFor="search">Tìm kiếm</label>
      <div className="search-box">
        <input
          id="search"
          type="text"
          placeholder="Nhập tên sách..."
          value={keyword}
          onChange={handleQueryShift}
        />
        {searching && <span className="searching">Đang tìm...</span>}
      </div>
    </div>

    <div className="field">
      <label htmlFor="category-filter">Thể loại</label>
      <select id="category-filter" value={category} onChange={onCategoryChange}>
        <option value="Tất cả">Tất cả</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterBar;
