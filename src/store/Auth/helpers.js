export const setUser = (user, storage) => {
  if (!storage) {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const clearUser = () => {
  sessionStorage.removeItem("user");
  localStorage.removeItem("user");
};
