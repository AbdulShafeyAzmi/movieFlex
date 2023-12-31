import React, { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inpurEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inpurEl.current) return;
        if (e.code === "Enter") {
          inpurEl.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inpurEl}
    />
  );
};

export default Search;
