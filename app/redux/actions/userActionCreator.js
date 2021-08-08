import { LOGIN, LOGOUT, REGISTER } from './constants';

export const createLoginAction = (username, password) => {
  return {
    type: LOGIN,
    user: { username, password },
  };
};

export const createLogoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const createRegisterAction = (username, password) => {
  return {
    type: REGISTER,
    user: { username, password },
  };
};
