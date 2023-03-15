import {tokenValue} from '../../src/Secret/Secret'

// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
  
  // return the token from the session storage
  export const getToken = (props) => {
    return sessionStorage.getItem(tokenValue) || null;
  }
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem(tokenValue);
    sessionStorage.removeItem('user');
  }
  
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    sessionStorage.setItem(tokenValue, token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }