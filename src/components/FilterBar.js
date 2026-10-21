import { CATEGORIES } from "../data";

const FilterBar = ({ keyword, category, searching, handleQueryShift, onCategoryChange }) => (
  <div className="filter-bar">
    <label htmlFor="search">Tìm kiếm</label>
    <input id="search" type="text" value={keyword} onChange={handleQueryShift} />
    {searching && <span className="searching">Đang tìm...</span>}

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
);

export default FilterBar;
