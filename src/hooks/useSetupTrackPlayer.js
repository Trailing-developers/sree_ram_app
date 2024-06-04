import { useEffect, useRef, useState } from "react";
import TrackPlayer, { RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1024 * 10,
    });
    await TrackPlayer.setVolume(0.3); // not too loud
    await TrackPlayer.setRepeatMode(RepeatMode.Queue); // repeat mode
  } catch (e) {
    console.log(e);
  }
};

export const useSetupTrackPlayer = ({ onLoad }) => {
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
};
