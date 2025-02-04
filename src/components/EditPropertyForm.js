import { useState, useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const EditPropertyForm = ({ property, onClose }) => {
  const { handleEditProperty } = useContext(PropertyContext);
  const [editedProperty, setEditedProperty] = useState(property);

  const handleChange = (e) => {
    setEditedProperty({ ...editedProperty, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProperty(property.id, editedProperty);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-property-form">
      <h2>Edit Property</h2>
      <input type="text" name="name" value={editedProperty.name} onChange={handleChange} required />
      <input type="text" name="price" value={editedProperty.price} onChange={handleChange} required />
      <input type="text" name="location" value={editedProperty.location} onChange={handleChange} required />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditPropertyForm;
