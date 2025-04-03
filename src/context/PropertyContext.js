import { createContext, useState } from "react";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties((prevProperties) => [...prevProperties, property]);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
