// src/contexts/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [previousUrl, setPreviousUrl] = useState('/');

  useEffect(() => {
    const customer = localStorage.getItem('customer_token');
    setIsLoggedIn(!!customer); // Set based on token presence
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = (navigate) => {
    localStorage.removeItem('customer_token');
    localStorage.removeItem('Cart_customer_Details');
    setIsLoggedIn(false);
    navigate('/restaurant', { replace: true });
  };

  const setPrevUrl = (url) => {
    if (url !== '/restaurant/login') {
      console.log(`Setting previous URL to: ${url}`);
      setPreviousUrl(url);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, previousUrl, setPrevUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;