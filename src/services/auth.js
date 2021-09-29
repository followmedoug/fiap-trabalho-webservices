import history from "./history";

export const TOKEN_KEY = null;
export const isAuthenticated = localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem("TOKEN_KEY");
export const saveToken = (token) => {
  localStorage.setItem("TOKEN_KEY", token);
};

let reduxStore;

export const setStore = (store) => {
  reduxStore = store;
};

export const logout = async () => {
  localStorage.removeItem("TOKEN_KEY");
  history.push("/login");
};
