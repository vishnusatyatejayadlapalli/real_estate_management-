import { createContext, useState, useEffect } from "react";
import { getProperties } from "../services/propertyService";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then(setProperties);
  }, []);

  const addProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, { id: Date.now(), ...newProperty }]);
  };

  return (
    <PropertyContext.Provider value={{ properties, setProperties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
