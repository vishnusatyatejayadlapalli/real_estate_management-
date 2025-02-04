const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h3>{property.name}</h3>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <button>View Details</button>
    </div>
  );
};

export default PropertyCard;
