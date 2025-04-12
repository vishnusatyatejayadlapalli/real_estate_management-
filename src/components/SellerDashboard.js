import React from "react";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Seller Dashboard</h1>
      <p>Welcome, seller! You can manage your properties here.</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/add-property")}>
          Add Property
        </button>
        <button style={styles.button} onClick={() => navigate("/manage-properties")}>
          Manage Properties
        </button>
        <button style={styles.logoutButton} onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    background: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgb(241, 20, 20)",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 15px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    marginTop: "20px",
    padding: "10px 15px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SellerDashboard;
