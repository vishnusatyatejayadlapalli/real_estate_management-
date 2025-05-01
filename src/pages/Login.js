import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('user');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password, activeTab);
      navigate(activeTab === 'agent' ? '/seller-dashboard' : '/');
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.');
    }
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2d3748',
          marginBottom: '35px',
          fontSize: '32px',
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>Welcome Back</h2>

        {/* Login Type Tabs */}
        <div style={{
          display: 'flex',
          marginBottom: '30px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '2px solid #e2e8f0',
          padding: '4px'
        }}>
          <button
            onClick={() => setActiveTab('user')}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              background: activeTab === 'user' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
              color: activeTab === 'user' ? 'white' : '#4a5568',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
          >
            User Login
          </button>
          <button
            onClick={() => setActiveTab('agent')}
            style={{
              flex: 1,
              padding: '12px',
              border: 'none',
              background: activeTab === 'agent' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
              color: activeTab === 'agent' ? 'white' : '#4a5568',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
          >
            Agent Login
          </button>
        </div>
        
        {error && <div style={{
          padding: '14px',
          background: 'rgba(254, 215, 215, 0.8)',
          color: '#c53030',
          borderRadius: '12px',
          marginBottom: '25px',
          border: '1px solid #feb2b2',
          fontSize: '14px',
          fontWeight: '500',
          backdropFilter: 'blur(10px)'
        }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3748',
              fontSize: '15px',
              fontWeight: '600'
            }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={`Enter your ${activeTab === 'agent' ? 'agent' : 'user'} email`}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                outline: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                ':focus': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
                }
              }}
            />
          </div>

          <div style={{ marginBottom: '28px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2d3748',
              fontSize: '15px',
              fontWeight: '600'
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: '2px solid #e2e8f0',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                outline: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                ':focus': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
                }
              }}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              marginBottom: '24px',
              boxShadow: '0 4px 6px rgba(102, 126, 234, 0.25)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 7px 14px rgba(102, 126, 234, 0.3)'
              }
            }}
          >
            {loading ? 'Signing in...' : `Sign In as ${activeTab === 'agent' ? 'Agent' : 'User'}`}
          </button>

          <div style={{
            textAlign: 'center',
            color: '#4a5568',
            fontSize: '15px',
            fontWeight: '500'
          }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#764ba2'
              }
            }}>
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
