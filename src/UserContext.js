import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe', // default user name
    email: 'john.doe@example.com', // default user email
    isAuthenticated: false, // default user authentication status
  });

  const login = (userData) => {
    setUser({
      ...userData,
      isAuthenticated: true,
    });
  };

  // Function to log the user out
  const logout = () => {
    setUser({
      name: '',
      email: '',
      isAuthenticated: false,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}