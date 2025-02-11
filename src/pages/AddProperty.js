import React, { useState } from "react";

function AddProperty({ onPropertyAdded }) {
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!property.title || !property.location || !property.price) {
      alert("Please fill all fields.");
      return;
    }

    // Pass property data to parent component
    if (onPropertyAdded) {
      onPropertyAdded(property);
    }

    // Reset form
    setProperty({ title: "", location: "", price: "", image: "" });
  };

  return (
    <div>
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={property.title}
          onChange={handleChange}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={property.location}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={property.price}
          onChange={handleChange}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={property.image}
          onChange={handleChange}
          placeholder="Enter Image URL"
        />

        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;
