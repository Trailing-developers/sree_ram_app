import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

const HOST = "sree-ram-backend.vercel.app";

export const useTrack = (id) => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/track/${id}`,
    fetcher
  );
  return { tracks: data, isLoading, error };
};
