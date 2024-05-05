import { Event, useTrackPlayerEvents } from "react-native-track-player";

const event = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.PlaybackActiveTrackChanged,
];

export const useLogTrackPlayerState = () => {
  useTrackPlayerEvents(event, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn(`Error occurred: ${event.error}`);
    }
    if (event.type === Event.PlaybackState) {
      console.log(`Playback state changed to: ${event.state}`);
    }

    if (event.type === Event.PlaybackActiveTrackChanged) {
      console.log(`Now playing: ${event.nextTrack}`);
    }
  });
};
