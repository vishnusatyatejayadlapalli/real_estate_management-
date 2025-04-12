import { useContext, useState, useEffect } from "react";
import { PropertyContext } from "../context/PropertyContext";
import SearchBar from "../components/SearchBar";
import villaImage from "../assets/villa.jpg"; // Import images from assets
import apartmentImage from "../assets/apartment.jpg";
import beachHouseImage from "../assets/beach-house.jpg";
import farmhouseImage from "../assets/farmhouse.jpg";
const SearchResults = () => {
  const { properties, setProperties } = useContext(PropertyContext);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [editingProperty, setEditingProperty] = useState(null);
  const [editedData, setEditedData] = useState({ title: "", location: "", price: "" });

  useEffect(() => {
    // Sample properties with imported images (can be updated from PropertyContext)
    if (!properties.length) {
      const sampleProperties = [
        { id: 1, title: "Luxury Villa", location: "Los Angeles", price: "$2,200,000", image: villaImage },
        { id: 2, title: "Modern Apartment", location: "New York", price: "$800,000", image: apartmentImage },
        { id: 3, title: "Beach House", location: "Miami", price: "$1,500,000", image: beachHouseImage },
        { id: 4, title: "building", location: "Chicago", price: "$1,000,000", image: farmhouseImage },
      ];
      setProperties(sampleProperties);
    }
    setFilteredProperties(properties);
  }, [properties, setProperties]);

  const handleDelete = (id) => {
    const updatedList = properties.filter((prop) => prop.id !== id);
    setProperties(updatedList);
    setFilteredProperties(updatedList);
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

  const handleEditClick = (property) => {
    setEditingProperty(property);
    setEditedData({ title: property.title, location: property.location, price: property.price });
  };

  const handleEditChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setProperties((prev) =>
      prev.map((prop) =>
        prop.id === editingProperty.id ? { ...prop, ...editedData } : prop
      )
    );
    setFilteredProperties((prev) =>
      prev.map((prop) =>
        prop.id === editingProperty.id ? { ...prop, ...editedData } : prop
      )
    );
    setEditingProperty(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Search Properties</h1>
      <SearchBar onSearch={handleSearch} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {filteredProperties.length === 0 ? (
          <p style={{ textAlign: "center" }}>No properties available.</p>
        ) : (
          filteredProperties.map((property) => (
            <div key={property.id} style={{ borderRadius: "10px", overflow: "hidden", background: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center", padding: "10px" }}>
              <img src={property.image} alt={property.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
              <div style={{ padding: "15px" }}>
                <h3>{property.title}</h3>
                <p style={{ color: "#555", margin: "5px 0" }}>{property.location}</p>
                <p style={{ color: "#333", fontWeight: "bold" }}>{property.price}</p>
                <button
                  onClick={() => handleEditClick(property)}
                  style={{
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    marginRight: "5px",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {editingProperty && (
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", textAlign: "center", maxWidth: "400px", margin: "auto", background: "white", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <h2>Edit Property</h2>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedData.title}
            onChange={handleEditChange}
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={editedData.location}
            onChange={handleEditChange}
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={editedData.price}
            onChange={handleEditChange}
            style={{
              width: "100%",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
          <button
            onClick={handleEditSave}
            style={{
              width: "100%",
              padding: "10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px"
            }}
          >
            Save
          </button>
          <button
            onClick={() => setEditingProperty(null)}
            style={{
              width: "100%",
              padding: "10px",
              background: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
