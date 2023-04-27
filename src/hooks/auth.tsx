import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { api } from "../service/api";

interface User {
  email: String;
  permissions: string[];
  roles: string[];
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn: ({ email, password }: SignInCredentials, callback: VoidFunction) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<User | null>(() => {
    const token = localStorage.getItem('@socialmedia:token');

    if (token) {
      setIsAuthenticated(true);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      api.get('/me').then(response => {
        const { email, permissions, roles } = response.data;

        return { email, permissions, roles };
      }).catch(() => {
        signOut();
      });
    }

    return null;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials, callback: VoidFunction): Promise<void> => {
    const response = await api.post('/sessions', { email, password });

    const { data } = response;

    localStorage.setItem('@socialmedia:token', data.token);
    localStorage.setItem('@socialmedia:refreshToken', data.refreshToken);

    api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    setData({
      email,
      roles: data.roles,
      permissions: data.permissions
    });
    setIsAuthenticated(true);

    callback();
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    localStorage.removeItem('@socialmedia:token');
    localStorage.removeItem('@socialmedia:refreshToken');

    setData(null);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@socialmedia:token');

    if (token) {
      setIsAuthenticated(true);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      api.get('/me').then(response => {
        const { email, permissions, roles } = response.data;

        setData({ email, permissions, roles });
      }).catch(() => {
        signOut();
      });
    }
  }, [signOut])

  const providerValue = useMemo(() => ({
    isAuthenticated: isAuthenticated,
    user: data,
    signIn,
    signOut,
  }), [isAuthenticated, data, signIn, signOut])

  useEffect(() => {
    console.log(providerValue);
  }, [providerValue]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
