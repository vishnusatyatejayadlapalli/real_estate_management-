import { useEffect, useState } from "react";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((property) => property.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h1>Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No properties in wishlist.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {wishlist.map((property) => (
            <div key={property.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "300px" }}>
              <img src={property.image} alt={property.title} width="100%" height="200px" style={{ borderRadius: "8px" }} />
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{property.price}</p>
              <button onClick={() => handleRemoveFromWishlist(property.id)} style={{ backgroundColor: "red", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
