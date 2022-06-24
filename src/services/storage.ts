import store from 'store';
import { createStore } from 'store/src/store-engine';
import sessionStorage from 'store/storages/sessionStorage';

export type User = {
  email: string;
  token: string;
  isStaff?: boolean;
  loginTime?: string;
};

const session = createStore([sessionStorage]);

export const saveUserSession = (user: User) => {
  session.set('user', user);
};

export const saveUserStorage = (user: User) => {
  store.set('user', user);
};

export const getUser = () => {
  let user: User = session.get('user');
  if (user) return user;
  user = store.get('user');
  if (user) {
    session.set('user', user);
    return user;
  }
};

export const cleanUser = () => {
  session.remove('user');
  store.remove('user');
};
