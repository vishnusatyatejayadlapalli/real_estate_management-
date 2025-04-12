import React, { useState } from "react";

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: "",
    location: "",
    price: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPropertyData({ ...propertyData, image: file });
      setPreview(URL.createObjectURL(file)); // Create preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Submitted:", propertyData);
    alert("Property added successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={propertyData.title}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={propertyData.location}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={propertyData.price}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          style={styles.fileInput}
        />

        {preview && (
          <div>
            <p>Image Preview:</p>
            <img src={preview} alt="Preview" style={styles.previewImage} />
          </div>
        )}

        <button type="submit" style={styles.button}>
          Add Property
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    background: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  fileInput: {
    margin: "10px 0",
  },
  previewImage: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddProperty;
