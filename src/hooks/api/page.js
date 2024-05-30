import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

export const useTemple = (id) => {
  const { data, isLoading, error } = useSWR(
    `https://sree-ram-backend.vercel.app/api/temple/${id}`,
    fetcher
  );
  return { templeDetails: data, isLoading, error };
};

export const useGodPage = (id) => {
  const { data, isLoading, error } = useSWR(
    `https://sree-ram-backend.vercel.app/api/gods/${id}`,
    fetcher
  );
  return { godData: data, isLoading, error };
};
