import { useState } from "react";
import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [regsiteredUsers, setregisredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || []);
  const [loggedInUser, setloggedInUser] = useState(JSON.parse(localStorage.getItem('LoggedInUser')) || null);

  console.log("RegisteredUser ->", regsiteredUsers);
  console.log("LoggedInUser ->", loggedInUser);
  

  return (
    <Auth.Provider
      value={{
        regsiteredUsers,
        setregisredUsers,
        loggedInUser,
        setloggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
