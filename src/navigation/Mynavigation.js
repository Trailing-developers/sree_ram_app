import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HomeScreen from "../screens/HomeScreen";
import CharitraScreen from "../screens/CharitraPaath/CharitraScreen";
import TrailScreen from "../screens/TrailScreen/TrailScreen";
import DarshanScreen from "../screens/DarshanScreen/DarshanScreen";
import TeachingsScreen from "../screens/TeachingsScreen/TeachingsScreen";
import TempleDetailPage from "../screens/DarshanScreen/TempleDetailPage";

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
