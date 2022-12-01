import { axiosInstance } from "./";

const signIn = async (payload) =>
  await axiosInstance.post("auth/signin", payload);

const signUp = async (payload) =>
  await axiosInstance.post("auth/signup", payload);

const signOut = async () => await axiosInstance.delete("auth/signout");

export { signIn, signUp, signOut };
