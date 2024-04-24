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
        <Stack.Screen name="TeachingsScreen" component={TeachingsScreen} />
        <Stack.Screen
          name="TempleDetailPage"
          component={TempleDetailPage}
          options={{
            headerShown: false,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
