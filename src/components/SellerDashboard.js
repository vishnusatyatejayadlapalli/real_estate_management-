import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const { properties, deleteProperty } = useContext(PropertyContext);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteProperty(id);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Seller Dashboard</h1>
        <p style={styles.subtitle}>Welcome! Manage your properties here.</p>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.addButton} onClick={() => navigate("/add-property")}>
          <span style={styles.buttonIcon}>+</span>
          Add New Property
        </button>
      </div>

      <div style={styles.propertyList}>
        <h2 style={styles.sectionTitle}>Your Properties</h2>
        {properties.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.emptyText}>No properties listed yet. Add your first property!</p>
          </div>
        ) : (
          <div style={styles.propertyGrid}>
            {properties.map((property) => (
              <div key={property.id} style={styles.propertyCard}>
                <div style={styles.imageContainer}>
                  {property.image ? (
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      style={styles.propertyImage}
                    />
                  ) : (
                    <div style={styles.placeholderImage}>
                      <span style={styles.placeholderText}>No Image</span>
                    </div>
                  )}
                </div>
                <div style={styles.propertyInfo}>
                  <h3 style={styles.propertyTitle}>{property.title}</h3>
                  <div style={styles.propertyDetails}>
                    <p style={styles.location}>
                      <span style={styles.icon}>📍</span> {property.location}
                    </p>
                    <p style={styles.price}>
                      <span style={styles.icon}>💰</span> {property.price}
                    </p>
                  </div>
                  <div style={styles.buttonGroup}>
                    <button 
                      style={styles.editButton}
                      onClick={() => navigate(`/edit-property/${property.id}`)}
                    >
                      <span style={styles.buttonIcon}>✏️</span> Edit
                    </button>
                    <button 
                      style={styles.deleteButton}
                      onClick={() => handleDelete(property.id)}
                    >
                      <span style={styles.buttonIcon}>🗑️</span> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "30px",
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
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
  addButton: {
    padding: "15px 30px",
    background: "linear-gradient(135deg, #4299e1, #667eea)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(66, 153, 225, 0.2)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(66, 153, 225, 0.3)",
    },
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#2d3748",
    marginBottom: "30px",
    fontWeight: "600",
  },
  propertyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
    padding: "20px 0",
  },
  propertyCard: {
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    },
  },
  imageContainer: {
    height: "200px",
    overflow: "hidden",
  },
  propertyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #e2e8f0, #cbd5e0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#718096",
    fontSize: "1.1rem",
  },
  propertyInfo: {
    padding: "20px",
  },
  propertyTitle: {
    fontSize: "1.3rem",
    color: "#2d3748",
    marginBottom: "15px",
    fontWeight: "600",
  },
  propertyDetails: {
    marginBottom: "20px",
  },
  location: {
    color: "#4a5568",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  price: {
    color: "#2d3748",
    fontWeight: "600",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "1.2rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  editButton: {
    flex: 1,
    padding: "10px",
    background: "#4299e1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    ":hover": {
      background: "#3182ce",
    },
  },
  deleteButton: {
    flex: 1,
    padding: "10px",
    background: "#e53e3e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    ":hover": {
      background: "#c53030",
    },
  },
  buttonIcon: {
    fontSize: "1.2rem",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  emptyText: {
    color: "#718096",
    fontSize: "1.1rem",
  },
};

export default SellerDashboard;
