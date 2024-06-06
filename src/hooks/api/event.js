import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

const isLocal = false;
const HOST = isLocal
  ? "http://192.168.1.70:3000"
  : "https://sree-ram-backend.vercel.app";

export const useCalendarEvents = (start, end) => {
  const { data, isLoading, error } = useSWR(
    `${HOST}/api/event/start/${start}/end/${end}`,
    fetcher
  );
  console.log(start, end);
  return { events: data, isLoading, error };
};
