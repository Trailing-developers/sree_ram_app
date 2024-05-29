import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

export const useTemple = (id) => {
  const { data, isLoading, error } = useSWR(
    `https://sree-ram-backend.vercel.app/api/temple/${id}`,
    fetcher
  );
  return { templeDetails: data, isLoading, error };
};
