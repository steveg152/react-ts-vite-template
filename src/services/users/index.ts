import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";

const get_all_users = () => {
  return instance.get(`https://jsonplaceholder.org/users`);
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: get_all_users,
  });
};

const post = () => {
  return instance.post(`/users`, {
    data: {
      name: "John Doe",
      phone: "555-555-5555",
    },
  });
};

export const Users = {
  get_all_users,
  post,
};
