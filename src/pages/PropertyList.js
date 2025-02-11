import React, { useState } from "react";

function PropertyList({ properties, setProperties }) {
  const [editingProperty, setEditingProperty] = useState(null);
  const [editableData, setEditableData] = useState({ title: "", location: "", price: "" });

  // Handle input changes
  const handleInputChange = (e) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  // Enable edit mode
  const handleEdit = (property) => {
    setEditingProperty(property.id);
    setEditableData({ title: property.title, location: property.location, price: property.price });
  };

  // Save edited property
  const handleSave = (id) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === id ? { ...property, ...editableData } : property
      )
    );
    setEditingProperty(null); // Exit edit mode
  };

  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            {editingProperty === property.id ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editableData.title}
                  onChange={handleInputChange}
                  placeholder="Property Title"
                />
                <input
                  type="text"
                  name="location"
                  value={editableData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                />
                <input
                  type="number"
                  name="price"
                  value={editableData.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                />
                <button onClick={() => handleSave(property.id)}>Save</button>
                <button onClick={() => setEditingProperty(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{property.title}</h3>
                <p>Location: {property.location}</p>
                <p>Price: ${property.price}</p>
                <button onClick={() => handleEdit(property)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
