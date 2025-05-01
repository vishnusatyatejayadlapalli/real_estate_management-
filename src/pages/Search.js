import React, { useState, useContext, useEffect } from "react";
import { PropertyContext } from "../context/PropertyContext";
import "./Search.css";

const Search = () => {
  const { properties } = useContext(PropertyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    email: "",
  });
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Load purchases from localStorage
    const storedPurchases = JSON.parse(localStorage.getItem('propertyPurchases') || '[]');
    setPurchases(storedPurchases);
  }, []);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (property) => {
    setSelectedProperty(property);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    const purchase = {
      propertyId: selectedProperty.id,
      propertyTitle: selectedProperty.title,
      propertyPrice: selectedProperty.price,
      purchaseDate: new Date().toISOString(),
      paymentInfo: {
        ...paymentInfo,
        cardNumber: `**** **** **** ${paymentInfo.cardNumber.slice(-4)}`,
      },
    };

    const updatedPurchases = [...purchases, purchase];
    setPurchases(updatedPurchases);
    localStorage.setItem('propertyPurchases', JSON.stringify(updatedPurchases));

    // Reset form and close modal
    setPaymentInfo({
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
      email: "",
    });
    setShowPaymentModal(false);
    setSelectedProperty(null);

    // Show success message
    alert("Purchase successful! Thank you for your business.");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h1 className="search-title">Find Your Dream Property</h1>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="image-container">
              {property.image ? (
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="property-image"
                />
              ) : (
                <div className="placeholder-image">
                  <span className="placeholder-text">No Image</span>
                </div>
              )}
            </div>
            <div className="property-info">
              <h3 className="property-title">{property.title}</h3>
              <div className="property-details">
                <p className="location">
                  <span className="icon">📍</span> {property.location}
                </p>
                <p className="price">
                  <span className="icon">💰</span> {property.price}
                </p>
                {property.description && (
                  <p className="description">{property.description}</p>
                )}
              </div>
              <button 
                className="buy-button"
                onClick={() => handleBuyNow(property)}
              >
                <span className="button-icon">💎</span> Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPaymentModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Complete Your Purchase</h2>
              <button 
                className="close-button"
                onClick={() => setShowPaymentModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-content">
              <div className="property-summary">
                <h3 className="summary-title">{selectedProperty.title}</h3>
                <p className="summary-price">{selectedProperty.price}</p>
              </div>
              <form onSubmit={handlePaymentSubmit} className="payment-form">
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Card Holder Name</label>
                  <input
                    type="text"
                    name="cardHolder"
                    value={paymentInfo.cardHolder}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength="3"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={paymentInfo.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>
                <button type="submit" className="submit-button">
                  <span className="button-icon">💳</span> Complete Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search; 