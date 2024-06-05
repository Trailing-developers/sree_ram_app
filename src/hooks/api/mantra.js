import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

const HOST = "sree-ram-backend.vercel.app";
export const useMantras = () => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/mantras`,
    fetcher
  );
  return { mantras: data, isLoading, error };
};
