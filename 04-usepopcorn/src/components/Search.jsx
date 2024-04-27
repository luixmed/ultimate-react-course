import { useState } from "react";
import { Input } from "./SearchStyles";

function Search() {
  const [query, setQuery] = useState("");

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
