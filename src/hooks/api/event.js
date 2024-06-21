import useSWR from "swr";
import { fetcher, fetcherWithTimeZone } from "../../helper/fetcher";

const isLocal = true;
const HOST = isLocal
  ? "http://localhost:3000"
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

export const useFullCalendarView = (year, month) => {
  console.log(year, month);
  const { data, isLoading, error } = useSWR(
    `${HOST}/api/calendar/year/${year}/month/${month}`,
    fetcher
  );
  return { calendarData: data, isLoading, error };
};
