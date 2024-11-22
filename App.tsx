import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './HomeScreen';
import FilterMenuScreen from './FilterMenuScreen';
import React from "react";
import AddMenuItemScreen from "./AddMenuItemScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen}/>
        <Stack.Screen name="FilterMenu" component={FilterMenuScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}