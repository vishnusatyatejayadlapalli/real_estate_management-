import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { addProperty } = useContext(PropertyContext);
  const [propertyData, setPropertyData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        setError("Image size should be less than 5MB");
        return;
      }
      setPropertyData({ ...propertyData, image: file });
      setPreview(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!propertyData.title || !propertyData.location || !propertyData.price) {
      setError("Please fill in all required fields");
      return;
    }

    const newProperty = {
      ...propertyData,
      id: Date.now(),
      image: preview,
      price: `$${Number(propertyData.price).toLocaleString()}`,
    };

    addProperty(newProperty);
    navigate("/seller-dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Add New Property</h1>
        <p style={styles.subtitle}>Fill in the details to list your property</p>
      </div>
      
      {error && (
        <div style={styles.error}>
          <span style={styles.errorIcon}>⚠️</span>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🏠</span>
              Property Title *
            </label>
            <input
              type="text"
              name="title"
              value={propertyData.title}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter property title"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📍</span>
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={propertyData.location}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter property location"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>💰</span>
              Price *
            </label>
            <input
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter property price"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>📝</span>
              Description
            </label>
            <textarea
              name="description"
              value={propertyData.description}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Enter property description"
              rows="4"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <span style={styles.labelIcon}>🖼️</span>
              Property Image
            </label>
            <div style={styles.fileUploadContainer}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={styles.fileInput}
                id="image-upload"
              />
              <label htmlFor="image-upload" style={styles.fileUploadLabel}>
                <span style={styles.uploadIcon}>📁</span>
                Choose Image
              </label>
            </div>
            {preview && (
              <div style={styles.previewContainer}>
                <img
                  src={preview}
                  alt="Preview"
                  style={styles.preview}
                />
              </div>
            )}
          </div>
        </div>

        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.submitButton}>
            <span style={styles.buttonIcon}>✨</span>
            Add Property
          </button>
          <button
            type="button"
            onClick={() => navigate("/seller-dashboard")}
            style={styles.cancelButton}
          >
            <span style={styles.buttonIcon}>↩️</span>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "40px",
    background: "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2d3748",
    marginBottom: "10px",
    fontWeight: "700",
    background: "linear-gradient(135deg, #4299e1, #667eea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#718096",
    marginTop: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#2d3748",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  labelIcon: {
    fontSize: "1.2rem",
  },
  input: {
    padding: "14px",
    borderRadius: "12px",
    border: "2px solid #e2e8f0",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    outline: "none",
    backgroundColor: "white",
    ":focus": {
      borderColor: "#4299e1",
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)",
    },
  },
  textarea: {
    padding: "14px",
    borderRadius: "12px",
    border: "2px solid #e2e8f0",
    fontSize: "1rem",
    resize: "vertical",
    minHeight: "120px",
    transition: "all 0.3s ease",
    outline: "none",
    backgroundColor: "white",
    ":focus": {
      borderColor: "#4299e1",
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.1)",
    },
  },
  fileUploadContainer: {
    position: "relative",
  },
  fileInput: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    border: "0",
  },
  fileUploadLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "14px",
    background: "white",
    border: "2px dashed #e2e8f0",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "#4a5568",
    fontWeight: "500",
    ":hover": {
      borderColor: "#4299e1",
      color: "#4299e1",
    },
  },
  uploadIcon: {
    fontSize: "1.2rem",
  },
  previewContainer: {
    marginTop: "15px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  preview: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  submitButton: {
    flex: 1,
    padding: "16px",
    background: "linear-gradient(135deg, #4299e1, #667eea)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(66, 153, 225, 0.2)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(66, 153, 225, 0.3)",
    },
  },
  cancelButton: {
    flex: 1,
    padding: "16px",
    background: "#e2e8f0",
    color: "#4a5568",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    ":hover": {
      background: "#cbd5e0",
    },
  },
  buttonIcon: {
    fontSize: "1.2rem",
  },
  error: {
    padding: "16px",
    background: "#fff5f5",
    color: "#c53030",
    borderRadius: "12px",
    marginBottom: "20px",
    border: "1px solid #feb2b2",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1rem",
  },
  errorIcon: {
    fontSize: "1.2rem",
  },
};

export default AddProperty;
