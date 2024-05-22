import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

export const useHomeWidgets = () => {
  const { data, isLoading, error } = useSWR(
    "https://sree-ram-backend.vercel.app/api/home",
    fetcher
  );
  return { data: data, isLoading, error };
};

export const useDarshanWidgets = () => {
  const { data, isLoading, error } = useSWR(
    "https://sree-ram-backend.vercel.app/api/darshan",
    fetcher
  );
  return { data: data, isLoading, error };
};
