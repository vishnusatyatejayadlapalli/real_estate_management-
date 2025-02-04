import { useState } from "react";

const AddPropertyForm = ({ handleAddProperty }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    type: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleAddProperty) {
      console.error("handleAddProperty is not defined!");
      return;
    }
    handleAddProperty(formData);
    setFormData({ name: "", location: "", price: "", type: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Property Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="text" name="type" placeholder="Type (apartment, villa, etc.)" value={formData.type} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
