//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TopScreen from "../components/TopScreen";
import Category from "../components/Category";
import Scroll from "../components/Scroll";

// create a component
const Apps = () => {
  return (
    <ScrollView className="bg-gray-50">
      <ScrollView className="mt-14 ml-4">
        {/* Today Section */}

        <TopScreen text={"Apps"} />

        <Category />
        <Scroll />
        {/* add horizontal line */}
        <View
          style={{
            height: 1, // Set the height of the line
            backgroundColor: "#ccc", // Set the color of the line
            width: "90%", // Set the width of the line (90% of the parent width)
            alignSelf: "center", // Center the line horizontally
          }}
        />
        <View className="flex flex-row justify-between ml-3 mr-6">
          <Text className="font-bold text-2xl">Apple Design Award Dinners</Text>
        </View>
        <Scroll />
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
export default Apps;
