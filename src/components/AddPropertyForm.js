import { useState } from "react";
import { addProperty } from "../services/propertyService";

const AddPropertyForm = ({ onPropertyAdded }) => {  // ✅ Ensure the function is received as a prop
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProperty({ ...property, image: file, imagePreview: imageUrl });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!property.image) {
      alert("Please upload an image.");
      return;
    }

    const newProperty = {
      title: property.title,
      location: property.location,
      price: property.price,
      image: property.imagePreview,
    };

    await addProperty(newProperty);
    
    // ✅ Ensure function exists before calling it
    if (typeof onPropertyAdded === "function") {
      onPropertyAdded();
    }

    setProperty({ title: "", location: "", price: "", image: null, imagePreview: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Property</h2>
      <input type="text" name="title" placeholder="Title" value={property.title} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={property.location} onChange={handleChange} required />
      <input type="text" name="price" placeholder="Price" value={property.price} onChange={handleChange} required />
      <input type="file" accept="image/*" onChange={handleImageUpload} required />

      {property.imagePreview && (
        <div>
          <p>Image Preview:</p>
          <img src={property.imagePreview} alt="Preview" width="100" />
        </div>
      )}

      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
