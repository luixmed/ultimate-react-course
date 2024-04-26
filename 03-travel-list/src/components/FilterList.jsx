import { Select } from "./FilterListStyled";

function FilterList({ sortBy, setSortBy }) {
  return (
    <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="input">Sort by input order</option>
      <option value="description">Sort by description</option>
      <option value="packed">Sort by packed status</option>
    </Select>
  );
}

export default FilterList;
