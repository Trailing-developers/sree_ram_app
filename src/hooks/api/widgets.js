import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

const HOST = "sree-ram-backend.vercel.app";

export const useHomeWidgets = () => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/home`,
    fetcher
  );
  return { data: data, isLoading, error };
};

export const useDarshanWidgets = () => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/darshan`,
    fetcher
  );
  return { data: data, isLoading, error };
};
