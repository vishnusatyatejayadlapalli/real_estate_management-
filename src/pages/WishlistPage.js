import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No properties in wishlist.</p>
      ) : (
        wishlist.map((property) => (
          <div key={property.id}>
            <h3>{property.name}</h3>
            <p>Price: {property.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
