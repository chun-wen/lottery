import axiosInstance from "./index";

export const getUserList = (userNumber: number) =>
  axiosInstance.get(`?results=${userNumber}`);
