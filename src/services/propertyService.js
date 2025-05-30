export const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Los Angeles, CA",
    price: "$1,200,000",
    image: "/assets/villa.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "New York, NY",
    price: "$850,000",
    image: "/assets/apartment.jpg",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    location: "San Francisco, CA",
    price: "$600,000",
    image: "/assets/cottage.jpg",
  },
  {
    id: 4,
    title: "beach view apartment",
    location: "San Francisco, CA",
    price: "$4500/month",
    image: "/assets/cottage.jpg",
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
