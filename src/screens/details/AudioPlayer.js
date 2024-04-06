import { View, Text } from "react-native";
import TrackPlayer from "react-native-track-player";

export default function AudioPlayer() {
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtist, setTrackArtist] = useState("");
  const [playbackState, setPlaybackState] = useState(null);

  useEffect(() => {
    const fetchTrackInfo = async () => {
      const track = await TrackPlayer.getCurrentTrack();
      if (track) {
        setTrackTitle(track.title);
        setTrackArtist(track.artist);
      }
    };

    const updatePlaybackState = (state) => {
      setPlaybackState(state);
    };

    TrackPlayer.addEventListener("playback-state", updatePlaybackState);

    fetchTrackInfo();

    return () => {
      TrackPlayer.removeEventListener("playback-state", updatePlaybackState);
    };
  }, []);

  const togglePlayback = async () => {
    const state = await TrackPlayer.getState();
    if (state === TrackPlayer.STATE_PLAYING) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.trackTitle}>{trackTitle}</Text>
      <Text style={styles.trackArtist}>{trackArtist}</Text>

      <TouchableOpacity onPress={togglePlayback}>
        <Icon
          name={playbackState === TrackPlayer.STATE_PLAYING ? "pause" : "play"}
          size={32}
          color="#444"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  trackTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  trackArtist: {
    fontSize: 16,
    color: "#666",
  },
});
