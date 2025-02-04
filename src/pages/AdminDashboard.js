import { useContext, useState } from "react";
import { PropertyContext } from "../context/PropertyContext";
import AddPropertyForm from "../components/AddPropertyForm";
import EditPropertyForm from "../components/EditPropertyForm";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const { properties, handleDeleteProperty } = useContext(PropertyContext);
  const [editingProperty, setEditingProperty] = useState(null);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <AddPropertyForm />

      <h2>Property Listings</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <strong>{property.name}</strong> - {property.price} - {property.location}
            <button onClick={() => setEditingProperty(property)}>Edit</button>
            <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editingProperty && <EditPropertyForm property={editingProperty} onClose={() => setEditingProperty(null)} />}
    </div>
  );
};

export default AdminDashboard;
