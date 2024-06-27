import React, { createContext, useContext, useState ,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';import { useNavigate } from 'react-router-dom';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
const navigate=useNavigate();
  useEffect(() => {
    const checkSession = () => {
      const lastSessionTime = localStorage.getItem('lastSessionTime');
      const currentTime = new Date().getTime();

      if (!lastSessionTime || currentTime - parseInt(lastSessionTime) > 24 * 60 * 60 * 1000) {
        // Clear local storage
        localStorage.clear();
        
        localStorage.setItem('lastSessionTime', currentTime.toString());
        navigate('/');
        window.location.reload();
      }
    };

    // Check session on component mount
    checkSession();

    // Set up interval to check session every minute
    const intervalId = setInterval(checkSession, 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="328905782048-g8nsa49t5mc9qbun6c1n3uvi7ndd4dn3.apps.googleusercontent.com">
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);