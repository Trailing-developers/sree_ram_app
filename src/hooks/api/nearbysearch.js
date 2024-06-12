import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

const HOST = "sree-ram-backend.vercel.app";

export const useNearbyHotels = (lat, lng) => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/search-nearby/hotels?lat=${lat}&lng=${lng}`,
    fetcher
  );
  return { nearbyHotelsData: data, isLoading, error };
};

export const useNearbyTemples = (lat, lng) => {
  const { data, isLoading, error } = useSWR(
    `https://${HOST}/api/search-nearby/temples?lat=${lat}&lng=${lng}`,
    fetcher
  );
  return { nearbyTempleData: data, isLoading, error };
};
