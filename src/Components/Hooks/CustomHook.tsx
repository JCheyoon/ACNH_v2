import { Dispatch, SetStateAction } from "react";

export const useDebounce = (
  callback: Dispatch<SetStateAction<string>>,
  wait: number
) => {
  let timer: number | NodeJS.Timeout;

  return function (value: string) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, wait);
  };
};
