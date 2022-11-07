import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const [user, setUser] = useState(null);
    const user={uid:'123'};
    const authInfo = {user};
    return (
        <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
  );
};

export default AuthProvider;
