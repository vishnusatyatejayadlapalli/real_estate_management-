import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const AdminPanel = () => {
  const { properties, editProperty } = useContext(PropertyContext);

  return (
    <div>
      <h2>Admin Panel</h2>
      {properties.length > 0 ? (
        properties.map((property) => (
          <div key={property.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{property.name}</h3>
            <p>{property.description}</p>
            <button onClick={() => editProperty(property.id)}>Edit</button>
          </div>
        ))
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
};

export default AdminPanel;
