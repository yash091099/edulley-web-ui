import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({}); // Initialize state here

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// const AppProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: 'John Doe', isAuthenticated: false });

//   return (
//     <AppContext.Provider value={{ user, setUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="328905782048-g8nsa49t5mc9qbun6c1n3uvi7ndd4dn3.apps.googleusercontent.com">

    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>);
