import { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

const SearchResults = () => {
  const { properties } = useContext(PropertyContext);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = (results) => {
    setFilteredProperties(results.length > 0 ? results : properties);
  };

  return (
    <div>
      <h1>Search Properties</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
