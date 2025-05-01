import { useState, useEffect } from "react";
import { useProperties } from "../context/PropertyContext";
import SearchBar from "../components/SearchBar";
import villaImage from "../assets/villa.jpg"; // Import images from assets
import apartmentImage from "../assets/apartment.jpg";
import beachHouseImage from "../assets/beach-house.jpg";
import farmhouseImage from "../assets/farmhouse.jpg";

const SearchResults = () => {
  const { properties, setProperties } = useProperties();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [editedData, setEditedData] = useState({ title: "", location: "", price: "" });

  useEffect(() => {
    // Initialize with sample properties if none exist
    if (properties.length === 0) {
      const sampleProperties = [
        { id: 1, title: "Luxury Villa", location: "Los Angeles", price: "$2,200,000", image: villaImage },
        { id: 2, title: "Modern Apartment", location: "New York", price: "$800,000", image: apartmentImage },
        { id: 3, title: "Beach House", location: "Miami", price: "$1,500,000", image: beachHouseImage },
        { id: 4, title: "Farmhouse", location: "Chicago", price: "$1,000,000", image: farmhouseImage },
      ];
      setProperties(sampleProperties);
    }
  }, [setProperties]);

  useEffect(() => {
    // Update filtered properties when properties change
    setFilteredProperties(properties);
  }, [properties]);

  const handleDelete = (id) => {
    const updatedList = properties.filter((prop) => prop.id !== id);
    setProperties(updatedList);
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
    const updatedProperties = properties.map((prop) =>
      prop.id === editingProperty.id ? { ...prop, ...editedData } : prop
    );
    setProperties(updatedProperties);
    setEditingProperty(null);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#2c3e50" }}>Search Properties</h1>
      <SearchBar onSearch={handleSearch} />

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "30px", 
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {filteredProperties.length === 0 ? (
          <p style={{ 
            textAlign: "center", 
            gridColumn: "1 / -1",
            fontSize: "18px",
            color: "#666"
          }}>No properties available.</p>
        ) : (
          filteredProperties.map((property) => (
            <div key={property.id} style={{ 
              borderRadius: "15px", 
              overflow: "hidden", 
              background: "white", 
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
              transition: "transform 0.2s ease",
              ':hover': {
                transform: "translateY(-5px)"
              }
            }}>
              <img 
                src={property.image} 
                alt={property.title} 
                style={{ 
                  width: "100%", 
                  height: "200px", 
                  objectFit: "cover"
                }} 
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ 
                  margin: "0 0 10px 0",
                  color: "#2c3e50",
                  fontSize: "20px"
                }}>{property.title}</h3>
                <p style={{ 
                  color: "#666", 
                  margin: "5px 0",
                  fontSize: "16px"
                }}>{property.location}</p>
                <p style={{ 
                  color: "#2980b9", 
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: "10px 0"
                }}>{property.price}</p>
                <div style={{ 
                  display: "flex", 
                  gap: "10px",
                  marginTop: "15px"
                }}>
                  <button
                    onClick={() => handleEditClick(property)}
                    style={{
                      flex: 1,
                      padding: "8px 15px",
                      background: "#3498db",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background 0.3s ease"
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(property.id)}
                    style={{
                      flex: 1,
                      padding: "8px 15px",
                      background: "#e74c3c",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background 0.3s ease"
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {editingProperty && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "400px",
          padding: "30px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          zIndex: 1000
        }}>
          <h2 style={{ 
            marginBottom: "20px",
            color: "#2c3e50",
            textAlign: "center"
          }}>Edit Property</h2>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "5px",
              color: "#34495e"
            }}>Title:</label>
            <input
              type="text"
              name="title"
              value={editedData.title}
              onChange={handleEditChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px"
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "5px",
              color: "#34495e"
            }}>Location:</label>
            <input
              type="text"
              name="location"
              value={editedData.location}
              onChange={handleEditChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px"
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "5px",
              color: "#34495e"
            }}>Price:</label>
            <input
              type="text"
              name="price"
              value={editedData.price}
              onChange={handleEditChange}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px"
              }}
            />
          </div>
          <div style={{ 
            display: "flex", 
            gap: "10px",
            marginTop: "20px"
          }}>
            <button
              onClick={handleEditSave}
              style={{
                flex: 1,
                padding: "12px",
                background: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Save
            </button>
            <button
              onClick={() => setEditingProperty(null)}
              style={{
                flex: 1,
                padding: "12px",
                background: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
