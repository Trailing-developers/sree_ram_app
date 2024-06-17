import useSWR from "swr";
import { fetcher, fetcherWithTimeZone } from "../../helper/fetcher";

const isLocal = false;
const HOST = isLocal
  ? "https://eddc-86-20-89-189.ngrok-free.app"
  : "https://sree-ram-backend.vercel.app";

export const useCalendarEvents = (start, end) => {
  const offset = new Date().getTimezoneOffset() / -60;
  const options = {
    "Content-Type": "application/json",
    "Timezone-Offset": offset.toString(),
  };
  const { data, isLoading, error } = useSWR(
    [`${HOST}/api/event/start/${start}/end/${end}`, options],
    fetcherWithTimeZone
  );

  return { events: data, isLoading, error };
};
