import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProperties, deleteProperty } from "../services/propertyService";
import SearchBar from "../components/SearchBar";

const SearchResults = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
      setFilteredProperties(data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProperty(id).then(() => {
      const updatedList = properties.filter((prop) => prop.id !== id);
      setProperties(updatedList);
      setFilteredProperties(updatedList);
    });
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProperties(properties);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = properties.filter(
        (property) =>
          property.title.toLowerCase().includes(lowercasedQuery) ||
          property.location.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div>
      <h1>Search Properties</h1>
      <SearchBar onSearch={handleSearch} />

      <table border="1">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map((property) => (
            <tr key={property.id}>
              <td>
                <img src={property.image} alt={property.title} width="100" />
              </td>
              <td>{property.title}</td>
              <td>{property.location}</td>
              <td>{property.price}</td>
              <td>
                <button onClick={() => alert("Edit functionality pending")}>
                  Edit
                </button>
                <button onClick={() => handleDelete(property.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* "Go to Home" Button */}
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default SearchResults;