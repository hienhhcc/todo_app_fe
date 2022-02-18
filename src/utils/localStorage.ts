export const getUserInfoFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')!);
};

export const setUserInfoIntoLocalStorage = (userInfo: any) => {
  return localStorage.setItem('user', JSON.stringify(userInfo));
};
