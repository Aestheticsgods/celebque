import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/types';
import { currentUser } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  upgradeToCreator: (displayName: string, bio: string, price: number) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(currentUser); // Start logged in for demo
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = async (email: string, password: string): Promise<boolean> => {
    // TODO: Implement actual login logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser(currentUser);
    setIsAuthenticated(true);
    return true;
  };

  const signup = async (email: string, password: string): Promise<boolean> => {
    // TODO: Implement actual signup logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser: User = {
      ...currentUser,
      email,
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const upgradeToCreator = async (displayName: string, bio: string, price: number): Promise<boolean> => {
    // TODO: Implement actual creator upgrade logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (user) {
      setUser({ ...user, isCreator: true });
    }
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      signup,
      logout,
      upgradeToCreator,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
