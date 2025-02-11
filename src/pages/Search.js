import React from "react";

const Search = ({ setPage }) => {
  return (
    <div>
      <h1>Search Properties</h1>
      <ul>
        <li>🏡 House in New York</li>
        <li>🏢 Apartment in California</li>
        <li>🌴 Villa in Miami</li>
      </ul>
      <button onClick={() => setPage("home")}>Go Back to Home</button>
    </div>
  );
};

export default Search;
