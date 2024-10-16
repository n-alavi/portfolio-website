import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase";
type AuthContexType = {
  user: User | null;
};
const AuthContext = createContext<AuthContexType>({ user: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to hold loading status

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null); // Update the user state
      setLoading(false); // Set loading to false after checking
    });

    return () => unsubscribe(); // Clean up the subscription
  }, [auth]);

  // Function to log in user
  //   const login = async (email, password) => {
  //     try {
  //       const userCredential = await signInWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       );
  //       setUser(userCredential.user);
  //     } catch (error) {
  //       console.error("Login error:", error);
  //       throw error; // Rethrow the error for further handling
  //     }
  //   };

  // Function to log out user
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state on logout
    } catch (error) {
      console.error("Logout error:", error);
      throw error; // Rethrow the error for further handling
    }
  };

  // Provide user data and authentication methods to child components
  const value = {
    user,
    // login,
    logout,
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
