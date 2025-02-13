import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/logo.png";

const Home = ({ setPage }) => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="logo-section">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <h1>Welcome to YADLAPALLI Real Estates</h1>
            <p>Find your dream home with us.</p>

            <div className="buttons">
                <button onClick={() => navigate("/search")}>Search </button>
                <button onClick={() => navigate("/about")}>About Us</button>
                <button onClick={() => navigate("/AddProperty")}>AddProperty</button>
            </div>
        </div>
    );
};

export default Home;
