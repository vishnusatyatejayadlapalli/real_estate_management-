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
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Submitted:", propertyData);
    alert("Property added successfully!");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🛖 Add New Property</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title</label>
            <input
              type="text"
              name="title"
              value={propertyData.title}
              onChange={handleChange}
              required
              placeholder="Enter property title"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Location</label>
            <input
              type="text"
              name="location"
              value={propertyData.location}
              onChange={handleChange}
              required
              placeholder="Enter location"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Price</label>
            <input
              type="text"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              required
              placeholder="Enter price"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              style={styles.fileInput}
            />
          </div>

          {preview && (
            <div style={styles.previewContainer}>
              <p style={styles.previewText}>Image Preview:</p>
              <img src={preview} alt="Preview" style={styles.previewImage} />
            </div>
          )}

          <button type="submit" style={styles.button}>
            + Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    fontSize: "26px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    marginBottom: "8px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    padding: "12px 15px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    background: "#f9f9f9",
  },
  fileInput: {
    marginTop: "5px",
  },
  previewContainer: {
    textAlign: "center",
    marginTop: "10px",
  },
  previewText: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  previewImage: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#6e8efb",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default AddProperty;
