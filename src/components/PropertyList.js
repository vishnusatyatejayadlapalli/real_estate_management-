import { useState } from "react";

const PropertyList = ({ properties, handleEditProperty }) => {
  const [editMode, setEditMode] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (property) => {
    setEditMode(property.id);
    setEditData(property);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ FIX: Ensure handleEditProperty is defined
    if (typeof handleEditProperty !== "function") {
      console.error("❌ Error: handleEditProperty is not a function!");
      return;
    }

    handleEditProperty(editData);
    setEditMode(null);
  };

  return (
    <div>
      <h2>Property List</h2>
      {properties.map((property) => (
        <div key={property.id}>
          {editMode === property.id ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={editData.name || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                value={editData.location || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="price"
                value={editData.price || ""}
                onChange={handleChange}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditMode(null)}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <p>{property.name} - {property.location} - ${property.price}</p>
              <button onClick={() => handleEditClick(property)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
