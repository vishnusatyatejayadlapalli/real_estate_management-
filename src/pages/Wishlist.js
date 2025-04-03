import React from "react";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Your Wishlist</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
        {wishlist.length === 0 ? <p style={{ textAlign: "center" }}>No properties in wishlist</p> : (
          wishlist.map((property) => (
            <div key={property.id} style={{ padding: "10px", borderRadius: "10px", background: "white", textAlign: "center" }}>
              <img src={property.image} alt={property.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p style={{ fontWeight: "bold" }}>{property.price}</p>
              <button onClick={() => removeFromWishlist(property.id)} style={{ background: "#dc3545", color: "white", borderRadius: "5px", padding: "8px", cursor: "pointer" }}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
