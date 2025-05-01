import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from '../components/PropertyCard';

import Wishlist from "./Wishlist";

const Dashboard = () => {
  const navigate = useNavigate();
  const { properties } = useContext(PropertyContext);
  const [soldProperties, setSoldProperties] = useState([]);

  useEffect(() => {
    // Load sold properties from localStorage
    const storedSoldProperties = JSON.parse(localStorage.getItem('soldProperties') || '[]');
    setSoldProperties(storedSoldProperties);
  }, []);

  const handleMarkAsSold = (property) => {
    const updatedSoldProperties = [...soldProperties, { ...property, soldDate: new Date().toISOString() }];
    setSoldProperties(updatedSoldProperties);
    localStorage.setItem('soldProperties', JSON.stringify(updatedSoldProperties));
  };

  const handleRemoveFromSold = (propertyId) => {
    const updatedSoldProperties = soldProperties.filter(p => p.id !== propertyId);
    setSoldProperties(updatedSoldProperties);
    localStorage.setItem('soldProperties', JSON.stringify(updatedSoldProperties));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Property Dashboard</h1>
        <p style={styles.subtitle}>Manage your properties and track sales</p>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.addButton} onClick={() => navigate("/add-property")}>
          <span style={styles.buttonIcon}>+</span>
          Add New Property
        </button>
      </div>

      <div style={styles.sectionsContainer}>
        {/* Active Properties Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Active Properties</h2>
          {properties.length === 0 ? (
            <div style={styles.emptyState}>
              <p style={styles.emptyText}>No active properties. Add your first property!</p>
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
                        style={styles.sellButton}
                        onClick={() => handleMarkAsSold(property)}
                      >
                        <span style={styles.buttonIcon}>✅</span> Mark as Sold
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sold Properties Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Sold Properties</h2>
          {soldProperties.length === 0 ? (
            <div style={styles.emptyState}>
              <p style={styles.emptyText}>No properties have been sold yet.</p>
            </div>
          ) : (
            <div style={styles.propertyGrid}>
              {soldProperties.map((property) => (
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
                      <p style={styles.soldDate}>
                        <span style={styles.icon}>📅</span> Sold on: {new Date(property.soldDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div style={styles.buttonGroup}>
                      <button 
                        style={styles.unsellButton}
                        onClick={() => handleRemoveFromSold(property.id)}
                      >
                        <span style={styles.buttonIcon}>↩️</span> Mark as Unsold
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "40px",
    background: "linear-gradient(135deg, #f6f9fc 0%, #f1f5f9 100%)",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "3rem",
    color: "#1a365d",
    marginBottom: "15px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #2b6cb0 0%, #4299e1 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#4a5568",
    marginTop: "10px",
    fontWeight: "500",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  },
  addButton: {
    padding: "16px 32px",
    background: "linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 16px rgba(66, 153, 225, 0.3)",
    ":hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 24px rgba(66, 153, 225, 0.4)",
    },
  },
  sectionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  section: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
  },
  sectionTitle: {
    fontSize: "2rem",
    color: "#2d3748",
    marginBottom: "35px",
    fontWeight: "700",
    position: "relative",
    paddingBottom: "15px",
    "::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "60px",
      height: "4px",
      background: "linear-gradient(90deg, #4299e1, #667eea)",
      borderRadius: "2px",
    },
  },
  propertyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "35px",
  },
  propertyCard: {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
    transition: "all 0.4s ease",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    ":hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
    },
  },
  imageContainer: {
    height: "220px",
    overflow: "hidden",
    position: "relative",
  },
  propertyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
    ":hover": {
      transform: "scale(1.08)",
    },
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: "#718096",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  propertyInfo: {
    padding: "25px",
  },
  propertyTitle: {
    fontSize: "1.4rem",
    color: "#1a365d",
    marginBottom: "18px",
    fontWeight: "700",
    lineHeight: "1.3",
  },
  propertyDetails: {
    marginBottom: "25px",
  },
  location: {
    color: "#4a5568",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.1rem",
  },
  price: {
    color: "#2d3748",
    fontWeight: "700",
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  soldDate: {
    color: "#48bb78",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.1rem",
    padding: "8px 12px",
    background: "rgba(72, 187, 120, 0.1)",
    borderRadius: "8px",
  },
  icon: {
    fontSize: "1.3rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
  },
  sellButton: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    fontWeight: "600",
    fontSize: "1.1rem",
    boxShadow: "0 4px 8px rgba(72, 187, 120, 0.2)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(72, 187, 120, 0.3)",
    },
  },
  unsellButton: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #f56565 0%, #e53e3e 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "all 0.3s ease",
    fontWeight: "600",
    fontSize: "1.1rem",
    boxShadow: "0 4px 8px rgba(229, 62, 62, 0.2)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(229, 62, 62, 0.3)",
    },
  },
  buttonIcon: {
    fontSize: "1.3rem",
  },
  emptyState: {
    textAlign: "center",
    padding: "50px",
    background: "rgba(247, 250, 252, 0.8)",
    borderRadius: "20px",
    border: "2px dashed #e2e8f0",
    backdropFilter: "blur(10px)",
  },
  emptyText: {
    color: "#718096",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
};

export default Dashboard;
