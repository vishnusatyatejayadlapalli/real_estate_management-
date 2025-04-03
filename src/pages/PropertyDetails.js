import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/PropertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(WishlistContext);

  useEffect(() => {
    // Simulating fetching property details from a database
    const fetchedProperty = {
      id,
      name: "luxury Apartment",
      price: "$500,000",
      location: "New York, NY",
      description: "A beautiful luxury apartment with stunning views.",
      image: "/assets/apartment.jpg",
    };

    setProperty(fetchedProperty);
  }, [id]);

  if (!property) {
    return <p>Loading property details...</p>;
  }

  const isWishlisted = wishlist.some((item) => item.id === property.id);

  return (
    <div className="property-details">
      <img src={property.image} alt={property.name} className="property-image" />
      <h1>{property.name}</h1>
      <p><strong>Price:</strong> {property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p>{property.description}</p>

      {!isWishlisted ? (
        <button onClick={() => addToWishlist(property)}>Add to Wishlist</button>
      ) : (
        <button onClick={() => removeFromWishlist(property.id)}>Remove from Wishlist</button>
      )}
    </div>
  );
};

export default PropertyDetails;