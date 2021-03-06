export const getUserInfoFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')!);
};

export const setUserInfoIntoLocalStorage = (userInfo: any) => {
  return localStorage.setItem('user', JSON.stringify(userInfo));
};

export const removeUserInfoFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getAccessTokenFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('accessToken')!);
};

export const setAccessTokenIntoLocalStorage = (accessToken: any) => {
  return localStorage.setItem('accessToken', JSON.stringify(accessToken));
};

export const removeAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('accessToken');
};
