// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [token, setToken] = useState(null);

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// AuthContext.jsx

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext; // Export the AuthContext object
