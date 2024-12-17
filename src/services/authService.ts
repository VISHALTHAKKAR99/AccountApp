import { User } from '../types/types';

export const saveUserToLocalStorage = (user: User): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFromLocalStorage = (): any => {
  const user = localStorage.getItem('user'); 
  return user ? JSON.parse(user) : null;      
};


export const clearUserFromLocalStorage = (): void => {
  localStorage.removeItem('user');
};
