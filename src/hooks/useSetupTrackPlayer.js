import { useEffect, useRef, useState } from "react";
import TrackPlayer, { RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  });
  await TrackPlayer.setVolume(0.3); // not too loud
  await TrackPlayer.setRepeatMode(RepeatMode.Queue); // repeat mode
};

export const useSetupTrackPlayer = ({ onLoad }) => {
  const [trackPlayer, setTrackPlayer] = useState();

  const isInitialized = useRef(false);
  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitialized.current = true;
        onLoad?.();
      })
      .catch((e) => {
        isInitialized.current = false;
        console.error(e);
      });
  }, [onLoad]);

  return trackPlayer;
};
