import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Real Estate App</h1>
      <button onClick={() => navigate("/search")}>Search Properties</button>
      <button onClick={() => navigate("/wishlist")}>View Wishlist</button>
      <button onClick={() => navigate("/admin")}>Admin Panel</button>
    </div>
  );
};

export default Home;
