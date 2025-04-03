import { useState, useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const { addProperty } = useContext(PropertyContext);
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(propertyData);
    navigate("/search"); // Redirect to Search Properties page
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={propertyData.title}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={propertyData.location}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={propertyData.price}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={propertyData.image}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
