import axios from "axios";

export const postUser = (user: {}) => {
    return axios.post(
      `http://localhost:3000/api/user`,
      { ...user },
    );
};

export const getUser = () => {
  return axios.get(
    `http://localhost:3000/api/user`,
  );
};

