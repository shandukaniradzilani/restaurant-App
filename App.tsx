import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './HomeScreen';
import AddMenuscreen from './AddMenuItemScreen';
import FilterMenuScreen from './FilterMenuScreen';
import React from "react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Add Menu" component={AddMenuscreen}/>
        <Stack.Screen name="Filter Menu" component={FilterMenuScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}