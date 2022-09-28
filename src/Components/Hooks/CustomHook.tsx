import { Dispatch, SetStateAction } from "react";

export const useDebounce = (
  callback: Dispatch<SetStateAction<string>>,
  wait: number
) => {
  let timer: number;

  return function (value: string) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, wait);
  };
};
