import React from "react";

const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
