import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Simulated login function with role
  const login = async (email, password, role) => {
    // In a real application, you would validate against a backend server
    // For demo purposes, we'll accept any email/password combination
    const user = {
      email,
      id: Date.now(),
      name: email.split('@')[0],
      role: role // 'user' or 'agent'
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return user;
  };

  // Simulated signup function with role
  const signup = async (email, password, role) => {
    // In a real application, you would create a new user in your backend
    // For demo purposes, we'll just do the same as login
    return login(email, password, role);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAgent: currentUser?.role === 'agent',
    isUser: currentUser?.role === 'user'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
