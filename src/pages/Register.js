import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background3.jpg"; // Import background image

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const user = await register(userInfo);
    setUser(user);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={userInfo.username}
          onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
