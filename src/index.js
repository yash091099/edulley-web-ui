import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

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
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
