'use client'
import React, { createContext, useContext, useState } from "react";

// lib/auth-context.tsx

interface User {
  email: string;
  streak: number;
  minutes: number;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("redirectAfterLogin");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


const UserAuth = ({ onLogin }: { onLogin: (user: any) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  const url = isLogin ? "http://localhost:8000/login" : "http://localhost:8000/signup";  // Use correct route

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      setError(errorData.error || "Something went wrong");
      return;
    }

    const data = await res.json();
    onLogin(data.user);
  } catch (err) {
    console.error(err);  // Log detailed error to console
    setError("Server error, try again later");
  }
};


  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold text-center mb-4">
        {isLogin ? "Login to Mindful" : "Create your account"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded border focus:outline-none focus:ring"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded border focus:outline-none focus:ring"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
          className="text-indigo-500 underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default UserAuth;
