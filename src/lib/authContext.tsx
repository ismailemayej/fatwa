"use client";

import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext<any>({
  user: null,
  setUser: () => {},
});
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
