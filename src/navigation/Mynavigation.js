import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CharitraScreen from '../screens/CharitraPaath/CharitraScreen';
import TrailScreen from '../screens/TrailScreen/TrailScreen';


const Stack = createNativeStackNavigator();
 
export default function Mynavigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="CharitraScreen" component={CharitraScreen} />
        <Stack.Screen name="TrailScreen" component={TrailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};