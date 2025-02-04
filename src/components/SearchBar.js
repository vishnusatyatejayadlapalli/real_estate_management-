import { useState, useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const SearchBar = ({ onSearch }) => {
  const { properties } = useContext(PropertyContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const filteredResults = properties.filter((property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (propertyType ? property.type === propertyType : true)
    );
    onSearch(filteredResults);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
        <option value="">All Types</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="house">House</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
