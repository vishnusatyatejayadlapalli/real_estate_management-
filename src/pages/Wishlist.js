import React from "react";

function Wishlist({ wishlist, onRemoveFromWishlist }) {
  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No properties in wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((property, index) => (
            <li key={index}>
              <img src={property.image} alt={property.title} width="100" />
              <p>{property.title} - {property.location} - ${property.price}</p>
              <button onClick={() => onRemoveFromWishlist(property)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
