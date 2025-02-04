import PropertyCard from "../components/PropertyCard";

const properties = [
  { name: "Luxury Villa", location: "Los Angeles", price: 500000 },
  { name: "Beach House", location: "Miami", price: 750000 },
];

const PropertyList = () => {
  return (
    <div>
      <h2>Available Properties</h2>
      {properties.map((prop, index) => (
        <PropertyCard key={index} property={prop} />
      ))}
    </div>
  );
};

export default PropertyList;
