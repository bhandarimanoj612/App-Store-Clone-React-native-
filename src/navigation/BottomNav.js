import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import Games from "../screens/Games";
import Apps from "../screens/Apps";
import Arcade from "../screens/Arcades";
import Search from "../screens/Search";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ focused, imageSource }) => {
  const iconSize = focused ? 28 : 28;
  const tintColor = focused ? "#2988EA" : "gray";

  return (
    <Image
      source={imageSource}
      style={{ width: iconSize, height: iconSize, tintColor }}
    />
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="news"
              size={focused ? 25 : 25}
              color={focused ? "#2988EA" : "gray"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "#2988EA" : "gray", fontSize: 11 }}>
              Today
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="games"
        component={Games}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="rocket-launch"
              size={focused ? 28 : 28}
              color={focused ? "#2988EA" : "gray"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "#2988EA" : "gray", fontSize: 11 }}>
              Games
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Apps"
        component={Apps}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="stack"
              size={focused ? 28 : 28}
              color={focused ? "#2988EA" : "gray"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "#2988EA" : "gray", fontSize: 11 }}>
              Apps
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Arcade"
        component={Arcade}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              imageSource={require("../../assets/arcade.png")} // replace with your image path
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "#2988EA" : "gray", fontSize: 11 }}>
              Arcade
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={focused ? 29 : 29}
              color={focused ? "#2988EA" : "gray"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? "#2988EA" : "gray", fontSize: 11 }}>
              Search
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
