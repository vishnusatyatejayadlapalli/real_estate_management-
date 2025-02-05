export const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Los Angeles, CA",
    price: "$1,200,000",
    image: "/images/villa.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "New York, NY",
    price: "$850,000",
    image: "/images/apartment.jpg",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    location: "San Francisco, CA",
    price: "$600,000",
    image: "/images/cottage.jpg",
  },
];

export const getProperties = () => Promise.resolve(properties);

export const addProperty = (property) => {
  property.id = properties.length + 1;
  properties.push(property);
  return Promise.resolve(property);
};

export const editProperty = (id, updatedProperty) => {
  const index = properties.findIndex((prop) => prop.id === id);
  if (index !== -1) {
    properties[index] = { ...properties[index], ...updatedProperty };
    return Promise.resolve(properties[index]);
  }
  return Promise.reject("Property not found");
};

export const deleteProperty = (id) => {
  const index = properties.findIndex((prop) => prop.id === id);
  if (index !== -1) {
    properties.splice(index, 1);
    return Promise.resolve();
  }
  return Promise.reject("Property not found");
};
