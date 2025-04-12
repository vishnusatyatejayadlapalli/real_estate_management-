import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background3.jpg";

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({ 
    username: "", 
    email: "", 
    password: "",
    phone: "",
    userType: "buyer" // Default to buyer
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const user = await register(userInfo);
      setUser(user);
      
      // Redirect based on user type
      switch(userInfo.userType) {
        case "buyer":
          navigate("/buyer-dashboard");
          break;
        case "renter":
          navigate("/renter-dashboard");
          break;
        case "seller":
          navigate("/seller-dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <div className="logo">
            <svg viewBox="0 0 24 24" className="house-icon">
              <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
            </svg>
            <span>EstatePro</span>
          </div>
          <h1>Create Your Account</h1>
          <p className="subtitle">Join our real estate community</p>
        </div>

        {error && (
          <div className="error-message">
            <svg viewBox="0 0 24 24" className="error-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" className="input-icon">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Username
            </label>
            <input
              type="text"
              value={userInfo.username}
              onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" className="input-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </label>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" className="input-icon">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
              Phone Number
            </label>
            <input
              type="tel"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
              placeholder="(123) 456-7890"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" className="input-icon">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              Password
            </label>
            <input
              type="password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
              required
              placeholder="••••••••"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" className="input-icon">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              I am a
            </label>
            <div className="user-type-options">
              <label className={`user-type-option ${userInfo.userType === 'buyer' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="buyer"
                  checked={userInfo.userType === 'buyer'}
                  onChange={() => setUserInfo({...userInfo, userType: 'buyer'})}
                />
                <div className="option-content">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  <span>Buyer</span>
                </div>
              </label>

              <label className={`user-type-option ${userInfo.userType === 'renter' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="renter"
                  checked={userInfo.userType === 'renter'}
                  onChange={() => setUserInfo({...userInfo, userType: 'renter'})}
                />
                <div className="option-content">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                  </svg>
                  <span>Renter</span>
                </div>
              </label>

              <label className={`user-type-option ${userInfo.userType === 'seller' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="seller"
                  checked={userInfo.userType === 'seller'}
                  onChange={() => setUserInfo({...userInfo, userType: 'seller'})}
                />
                <div className="option-content">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <path d="M9 22V12h6v10"/>
                  </svg>
                  <span>Seller</span>
                </div>
              </label>
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="register-button">
            {isLoading ? (
              <span className="button-loading">
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
                Creating account...
              </span>
            ) : (
              'Register Now'
            )}
          </button>

          <div className="login-link">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </form>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url(${backgroundImage}) no-repeat center center;
          background-size: cover;
          padding: 20px;
        }

        .register-card {
          width: 100%;
          max-width: 500px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .register-header {
          padding: 30px 30px 20px;
          text-align: center;
          background: linear-gradient(135deg, #3498db, #2c3e50);
          color: white;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .house-icon {
          width: 32px;
          height: 32px;
          fill: white;
          margin-right: 10px;
        }

        h1 {
          margin: 0;
          font-size: 1.8rem;
        }

        .subtitle {
          margin: 8px 0 0;
          opacity: 0.9;
          font-size: 0.95rem;
        }

        .register-form {
          padding: 25px 30px 30px;
        }

        .error-message {
          background: #fdecea;
          color: #e74c3c;
          padding: 12px 15px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }

        .error-icon {
          width: 18px;
          height: 18px;
          fill: #e74c3c;
          margin-right: 8px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #34495e;
          font-weight: 500;
        }

        .input-icon {
          width: 18px;
          height: 18px;
          fill: #7f8c8d;
          margin-right: 8px;
        }

        input {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        .user-type-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .user-type-option {
          position: relative;
          cursor: pointer;
        }

        .user-type-option input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .option-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 15px 10px;
          border: 2px solid #eee;
          border-radius: 6px;
          transition: all 0.2s;
          background: white;
        }

        .user-type-option svg {
          width: 24px;
          height: 24px;
          fill: #7f8c8d;
          margin-bottom: 8px;
        }

        .user-type-option span {
          font-size: 0.85rem;
          text-align: center;
        }

        .user-type-option.active .option-content {
          border-color: #3498db;
          background: #f8fafc;
        }

        .user-type-option.active svg {
          fill: #3498db;
        }

        .register-button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
        }

        .register-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #2980b9, #3498db);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .register-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .spinner {
          animation: rotate 2s linear infinite;
          width: 20px;
          height: 20px;
        }

        .spinner .path {
          stroke: white;
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }

        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }

        .login-link {
          text-align: center;
          margin-top: 20px;
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .login-link a {
          color: #3498db;
          text-decoration: none;
          font-weight: 500;
        }

        .login-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .user-type-options {
            grid-template-columns: 1fr;
          }

          .register-header {
            padding: 25px 20px 15px;
          }

          .register-form {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;