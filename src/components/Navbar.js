import React from "react";

function Navbar({ setPage }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#333", color: "#fff" }}>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("search")}>Search</button>
      <button onClick={() => setPage("wishlist")}>Wishlist</button>
      <button onClick={() => setPage("propertyDetails")}>Property Details</button>
      <button onClick={() => setPage("addProperty")}>Add Property</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;
