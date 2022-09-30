import { default as axios } from "axios";

export const useAxios = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const get = (path: string, token: string) => {
    return axios.get(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  const post = (path: string, data: any, token?: string) => {
    return axios.post(
      `${BASE_URL}${path}`,
      data,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  const put = (path: string, data: string, token: string) => {
    return axios.put(
      `${BASE_URL}${path}`,
      data,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  const remove = (path: string, token: string) => {
    return axios.delete(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  return {
    get,
    post,
    put,
    remove,
  };
};
