import React, { useState } from "react";
import PropertyCard from '../components/PropertyCard';

import Wishlist from "./Wishlist";

function Dashboard() {
  const [properties] = useState([
    { title: "Luxury Villa", location: "New York", price: 500000, image: "villa.jpg" },
    { title: "Beach House", location: "California", price: 750000, image: "beach.jpg" },
  ]);

  const [wishlist, setWishlist] = useState([]);

  // Add to wishlist
  const handleAddToWishlist = (property) => {
    if (!wishlist.includes(property)) {
      setWishlist([...wishlist, property]);
    }
  };

  // Remove from wishlist
  const handleRemoveFromWishlist = (property) => {
    setWishlist(wishlist.filter((item) => item !== property));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Properties</h2>
      <div className="property-list">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} onAddToWishlist={handleAddToWishlist} />
        ))}
      </div>

      <Wishlist wishlist={wishlist} onRemoveFromWishlist={handleRemoveFromWishlist} />
    </div>
  );
}

export default Dashboard;
