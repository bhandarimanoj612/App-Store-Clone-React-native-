//import libraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

// create a component
const TopScreen = ({ text, today }) => {
  return (
    <View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row">
          <Text className="font-bold text-4xl">{text}</Text>
          <Text className="font-bold text-gray-400 text-2xl m-2">{today}</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/manoj.jpg")}
            className="w-10 h-10 rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default TopScreen;
