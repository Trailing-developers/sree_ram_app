import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CharitraScreen from "../screens/CharitraPaath/CharitraScreen";
import TrailScreen from "../screens/TrailScreen/TrailScreen";
import DarshanScreen from "../screens/DarshanScreen/DarshanScreen";
import TeachingsScreen from "../screens/TeachingsScreen/TeachingsScreen";
import TempleDetailPage from "../screens/DarshanScreen/TempleDetailPage";
import PhotosPage from "../screens/DarshanScreen/temple_detail_page/PhotosPage";
import GodAndGoddessDetailPage from "../screens/DarshanScreen/God_and_goddess_details/GodAndGoddessDetailPage";
import BookKathaContent from "../screens/TeachingsScreen/BookKathaContent";
import CalendarScreen from "../screens/Calendar/Calendar";
import AudioPlayer from "../shared/Players/AudioPlayer";
import { StackScreenWithSearchBar } from "../constants/layout";
import PlayerScreen from "../shared/Players/AudioPlayer/PlayerScreen";
import { FloatingPlayer } from "../shared/Players/AudioPlayer/FloatingPlayer";
import { VideoScreen } from "../shared/Players/VideoPlayer/VideoScreen";
import FeedbackScreen from "../screens/feedback/FeedbackScreen";
import { DanikPragati } from "../screens/danikpragati/DanikPragati";
import { MantraPage } from "../screens/danikpragati/MantraPage";
import { MindPage } from "../screens/danikpragati/MindPage";
import PhotoDetailPage from "../screens/DarshanScreen/temple_detail_page/PhotoPage/PhotoDetailPage";
import EventsScreen from "../screens/Calendar/EventScreen";
import PanchangaScreen from "../screens/Calendar/PanchangaScreen";
import CustomCalendar from "../screens/Calendar/CustomCalendar";
import FestivalScreen from "../screens/Calendar/FestivalScreen";

const Stack = createNativeStackNavigator();

export default function Mynavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="CharitraScreen" component={CharitraScreen} />
        <Stack.Screen name="TrailScreen" component={TrailScreen} />
        <Stack.Screen
          name="DarshanScreen"
          component={DarshanScreen}
          options={{
            useNativeDrive: true,
          }}
        />
        <Stack.Screen
          name="TeachingsScreen"
          component={TeachingsScreen}
          option={{
            ...StackScreenWithSearchBar,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="TempleDetailPage"
          component={TempleDetailPage}
          options={{
            headerShown: true,
            useNativeDrive: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
        <Stack.Screen
          name="TemplePhotoPage"
          component={PhotosPage}
          options={{
            headerShown: true,
            useNativeDrive: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
        <Stack.Screen
          name="GodDetails"
          component={GodAndGoddessDetailPage}
          options={{
            useNativeDrive: true,
          }}
        />
        <Stack.Screen
          name="KathaContent"
          component={BookKathaContent}
          options={{
            useNativeDrive: true,
          }}
        />
        <Stack.Screen
          name="Calender"
          component={CalendarScreen}
          options={{
            useNativeDrive: true,
          }}
        />
        <Stack.Screen
          name="AudioPlayer"
          component={AudioPlayer}
          options={{
            ...StackScreenWithSearchBar,
            headerShown: true,
            headerTitle: "Songs",
            useNativeDrive: true,
          }}
        />
        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
          options={{
            presentation: "card",
            gestureEnabled: true,
            gestureDirection: "vertical",
            animationDuration: 400,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="VideoScreen"
          component={VideoScreen}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="DanikPragati"
          component={DanikPragati}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MantraPage"
          component={MantraPage}
          option={{
            ...StackScreenWithSearchBar,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MindPage"
          component={MindPage}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PhotoDetailPage"
          component={PhotoDetailPage}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="EventScreen"
          component={EventsScreen}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PanchangaScreen"
          component={PanchangaScreen}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CustomCalendar"
          component={CustomCalendar}
          option={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FestivalScreen"
          component={FestivalScreen}
          option={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
      <FloatingPlayer
        style={{
          Positions: "absolute",
          left: 8,
          right: 8,
          botton: 78,
        }}
      />
    </NavigationContainer>
  );
}
