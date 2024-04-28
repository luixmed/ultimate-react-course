import { Input } from "./SearchStyles";

function Search({ query, setQuery }) {
  return (
    <Input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></Input>
  );
}

export default Search;
