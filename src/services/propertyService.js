export const getProperties = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Luxury Apartment",
      location: "New York, USA",
      price: "$2,500/month",
      type: "apartment",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Modern Villa",
      location: "Los Angeles, USA",
      price: "$1,200,000",
      type: "villa",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Cozy House",
      location: "Miami, USA",
      price: "$850,000",
      type: "house",
      image: "https://via.placeholder.com/300",
    },
  ]);
};
