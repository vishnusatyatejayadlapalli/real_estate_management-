import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('user'); // 'user' or 'agent'
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password should be at least 6 characters long');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, activeTab);
      navigate(activeTab === 'agent' ? '/seller-dashboard' : '/');
    } catch (error) {
      setError('Failed to create an account. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2c3e50',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: '600'
        }}>Create Account</h2>

        {/* Account Type Tabs */}
        <div style={{
          display: 'flex',
          marginBottom: '30px',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #e0e0e0'
        }}>
          <button
            onClick={() => setActiveTab('user')}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              background: activeTab === 'user' ? '#3498db' : '#f8f9fa',
              color: activeTab === 'user' ? 'white' : '#666',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            User Account
          </button>
          <button
            onClick={() => setActiveTab('agent')}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              background: activeTab === 'agent' ? '#3498db' : '#f8f9fa',
              color: activeTab === 'agent' ? 'white' : '#666',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            Agent Account
          </button>
        </div>
        
        {error && <div style={{
          padding: '12px',
          background: '#fff3f3',
          color: '#e74c3c',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #ffd1d1',
          fontSize: '14px'
        }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#34495e',
              fontSize: '15px',
              fontWeight: '500'
            }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={`Enter your ${activeTab === 'agent' ? 'agent' : 'user'} email`}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #dde1e7',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#34495e',
              fontSize: '15px',
              fontWeight: '500'
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #dde1e7',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#34495e',
              fontSize: '15px',
              fontWeight: '500'
            }}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #dde1e7',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              marginBottom: '20px'
            }}
          >
            {loading ? 'Creating Account...' : `Sign Up as ${activeTab === 'agent' ? 'Agent' : 'User'}`}
          </button>

          <div style={{
            textAlign: 'center',
            color: '#7f8c8d',
            fontSize: '14px'
          }}>
            Already have an account?{' '}
            <Link to="/login" style={{
              color: '#3498db',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup; 