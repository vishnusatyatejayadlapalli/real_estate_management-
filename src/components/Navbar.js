import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setPage }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" onClick={() => setPage("home")} style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/contact" onClick={() => setPage("contact")} style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      <Link to="/Login" onClick={() => setPage("Login")} style={{ color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/" onClick={() => setPage("Wishlist")} style={{ color: "white", textDecoration: "none" }}>Wishlist</Link>
      <Link to="/Register" onClick={() => setPage("Register")} style={{ color: "white", textDecoration: "none" }}>Register</Link>
    </nav>
  );
}

export default Navbar;
