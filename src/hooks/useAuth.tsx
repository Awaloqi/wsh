import React, { useCallback, useState, createContext, ReactNode, useContext, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginFormValues } from '../components/Login/LoginForm';
import { login as apiLogin } from '../services/apiClient';
import { cleanUser, getUser, saveUserSession, saveUserStorage } from '../services/storage';
import { normalizeAsyncError } from '../utils/object';

const initialUserState = getUser();

const AuthContext = createContext({
  user: initialUserState,
  loginError: undefined as string | null | undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: (async () => {}) as (user: LoginFormValues) => Promise<void | string>,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  zipCode: '' as string | undefined,
  addressLine1: '' as string | undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setZipCode: (() => {}) as (zipCode?: string) => void,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAddressLine1: (() => {}) as (setAddressLine1?: string) => void,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();
  const [user, setUser] = useState(initialUserState);
  const [loginError, setLoginError] = useState(undefined as string | undefined);
  const [zipCode, setZipCode] = useState<string>();
  const [addressLine1, setAddressLine1] = useState<string>();

  const login = useCallback(
    async ({ password, email, saveSession }: LoginFormValues) => {
      const response = await apiLogin({ email, password }).catch(normalizeAsyncError);
      if ('token' in response) {
        const user = { email, token: response.token };
        saveUserSession(user);
        if (saveSession) {
          saveUserStorage(user);
        }
        setUser(user);
        history.replace('/');
      }
      if ('detail' in response) {
        setLoginError(response.detail);
        return response.detail;
      }
    },
    [setUser, history],
  );

  const logout = useCallback(() => {
    cleanUser();
    setUser(undefined);
    history.replace('/');
  }, [setUser, history]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loginError, zipCode, setZipCode, addressLine1, setAddressLine1 }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthDecorator = (Story: () => ReactElement<unknown>) => (
  <AuthContext.Provider value={{ user: { email: 'email@example.com', token: '123' } } as any}>
    <Story />
  </AuthContext.Provider>
);
