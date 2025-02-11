import React, { createContext, useState } from "react";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Luxury Villa",
      location: "Los Angeles, CA",
      price: 500000,
      image: "/assets/villa.jpg", // Ensure this image exists
    },
    {
      id: 2,
      name: "Modern Apartment",
      location: "New York, NY",
      price: 300000,
      image: "/assets/apartment.jpg",
    },
  ]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};
