//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TopScreen from "../components/TopScreen";
import Category from "../components/Category";
import Scroll from "../components/Scroll";
import { ImageBackground } from "expo-image";
import Application from "../components/Application";

// create a component
const Arcades = () => {
  return (
    <ScrollView>
      {/* <ScrollView className="bg-red-500 w-50% h-50% pb-96 pt-10 "> */}

      <ImageBackground
        source={require("../../assets/apple.jpg")} // replace with your image path
        style={{
          width: "100%",
          height: 350, // Adjust height as needed
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 300,
          paddingLeft: 300,
          paddingTop: 10,
          marginTop: 40,
        }}
      >
        <TopScreen />
      </ImageBackground>
      {/* </ScrollView> */}
      <ScrollView className=" ml-4">
        {/* Today Section */}

        <Category />
        <View className="flex flex-row justify-between ml-3 mr-6">
          <Text className="font-bold text-2xl mt-5">Top Arcades Games</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="m-3">
            <Application />
          </View>
          <View className="m-3">
            <Application />
          </View>
          <View className="m-3">
            <Application />
          </View>
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Arcades;
