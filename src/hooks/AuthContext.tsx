import React, { createContext } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import api from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  nickname: string;
  avatar_url: string;
}
interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signOut(): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Posts:token");
    const user = localStorage.getItem("@Posts:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", { email, password });

    const { token, user } = response.data;
    localStorage.setItem("@Posts:token", token);
    localStorage.setItem("@Posts:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@Posts:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );
  const signOut = useCallback(() => {
    localStorage.removeItem("@Posts:token");
    localStorage.removeItem("@Posts:user");
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
}
