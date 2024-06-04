import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

const HOST = "sree-ram-backend.onrender.com";

export const useCalendarEvents = (start, end) => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/event/start/${start}/end/${end}`,
    fetcher
  );
  return { events: data, isLoading, error };
};
