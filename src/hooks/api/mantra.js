import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

export const useMantras = () => {
  const { data, isLoading, error } = useSWR(
    "https://sree-ram-backend.vercel.app/api/mantras",
    fetcher
  );
  return { mantras: data, isLoading, error };
};
