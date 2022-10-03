import { AxiosResponse, default as axios } from "axios";

export const useAxios = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;

  //eslint-disable-next-line
  const get = (path: string, token?: string): any => {
    return axios.get(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  //eslint-disable-next-line
  const post = (path: string, data: any, token?: string): any => {
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

  //eslint-disable-next-line
  const put = (path: string, data: string, token: string): any => {
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

  //eslint-disable-next-line
  const remove = (path: string, token: string): any => {
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
