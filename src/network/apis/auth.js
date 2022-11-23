import { axiosInstance } from "./";

const signIn = async (payload) =>
  await axiosInstance.post("auth/login", payload);

export { signIn };
