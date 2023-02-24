import { UsersData } from "../interfaces/UsersInterface/UsersData";

export const UsersApi = async (): Promise<UsersData> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};
