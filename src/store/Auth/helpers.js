export const setUser = (user, storage = "session") => {
  if (storage === "session") {
    sessionStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.setItem("user", JSON.stringify(user));
  }
};
