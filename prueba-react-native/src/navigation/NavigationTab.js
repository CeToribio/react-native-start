import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="SETTINGS" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
