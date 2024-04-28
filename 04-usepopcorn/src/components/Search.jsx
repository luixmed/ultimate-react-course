import { useRef } from "react";
import { Input } from "./SearchStyles";
import { useKey } from "../hooks/useKey";

function Search({ query, setQuery }) {
  const inputElementRef = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputElementRef.current) return;
    inputElementRef.current.focus();
    setQuery("");
  });

  return (
    <Input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElementRef}
    ></Input>
  );
}

export default Search;
