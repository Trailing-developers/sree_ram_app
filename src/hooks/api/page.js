import useSWR from "swr";
import { fetcher } from "../../helper/fetcher";

// const HOST = "https://eddc-86-20-89-189.ngrok-free.app";
const HOST = "https://sree-ram-backend.vercel.app";

export const useTemple = (id) => {
  const { data, isLoading, error } = useSWR(
    `${HOST}/api/temple/${id}`,
    fetcher
  );
  return { templeDetails: data, isLoading, error };
};

export const useGodPage = (id) => {
  const { data, isLoading, error } = useSWR(`${HOST}/api/gods/${id}`, fetcher);
  return { godData: data, isLoading, error };
};

export const useKathaList = () => {
  const { data, isLoading, error } = useSWR(
    `${HOST}/api/kathas/type/katha`,
    fetcher
  );
  return { kathaData: data, isLoading, error };
};

export const useKathaPage = (id) => {
  const { data, isLoading, error } = useSWR(`${HOST}/api/katha/${id}`, fetcher);
  return { kathaData: data, isLoading, error };
};

export const useKathaMedia = (id) => {
  const { data, isLoading, error } = useSWR(
    `${HOST}/api/media/katha/${id}`,
    fetcher
  );
  return { kathaMediaData: data, isLoading, error };
};

export const useTemplePhotoPage = (id) => {
  const { data, isLoading, error } = useSWR(
    `${HOST}/api/temple/media/${id}`,
    fetcher
  );
  return { templePhotos: data, isLoading, error };
};
