import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={userInfo.username}
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
