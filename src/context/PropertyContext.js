import { createContext, useState, useContext } from 'react';

const PropertyContext = createContext();

export function useProperties() {
  return useContext(PropertyContext);
}

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter(property => property.id !== id));
  };

  const editProperty = (id, updatedProperty) => {
    setProperties(properties.map(property => 
      property.id === id ? { ...property, ...updatedProperty } : property
    ));
  };

  const value = {
    properties,
    setProperties,
    addProperty,
    deleteProperty,
    editProperty
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
}

export { PropertyContext };
