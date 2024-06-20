//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TopScreen from "../components/TopScreen";
import { Ionicons } from "@expo/vector-icons";
import Application from "../components/Application";
// create a component
const Search = () => {
  return (
    <ScrollView className="bg-gray-50">
      <ScrollView className="mt-14 ml-4">
        {/* Today Section */}
        <TopScreen text={"Search"} />
        <View className="bg-gray-200 p-2  rounded-lg m-5 flex flex-row justify-between">
          {/* Search Icons */}
          <Ionicons name="search" size="20" color="grey" />
          <TextInput placeholder="Games,Apps,Stories and More" />
          {/* Voice Record Icons */}
          <TouchableOpacity>
            <Ionicons name="mic" size="20" color="grey" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between ml-3 mr-6">
          <Text className="font-bold text-2xl mt-5">Discover</Text>
        </View>
        <View>
          <View className="flex flex-row justify-between mr-12">
            <View>
              <View className="flex flex-row m-2">
                <Ionicons name="search" size="20" color="#2988EA" />
                <Text className="font-medium ml-2 text-base text-[#2988EA] ">
                  SahajYatri
                </Text>
              </View>
              <View
                style={{
                  height: 1, // Set the height of the line
                  backgroundColor: "#ccc", // Set the color of the line
                  width: "126%", // Set the width of the line (90% of the parent width)
                  marginTop: 10, // Set the top margin of the line
                }}
              />
            </View>

            <View>
              <View className="flex flex-row m-2">
                <Ionicons name="search" size="20" color="#2988EA" />
                <Text className="font-medium ml-2 text-base text-[#2988EA] ">
                  YetaiEats
                </Text>
              </View>
              <View
                style={{
                  height: 1, // Set the height of the line
                  backgroundColor: "#ccc", // Set the color of the line
                  width: "126%", // Set the width of the line (90% of the parent width)
                  marginTop: 10, // Set the top margin of the line
                }}
              />
            </View>
          </View>
          <View className="flex flex-row justify-between mr-12">
            <View>
              <View className="flex flex-row m-2">
                <Ionicons name="search" size="20" color="#2988EA" />
                <Text className="font-medium ml-2 text-base text-[#2988EA] ">
                  Linkedin
                </Text>
              </View>
              <View
                style={{
                  height: 1, // Set the height of the line
                  backgroundColor: "#ccc", // Set the color of the line
                  width: "136%", // Set the width of the line (90% of the parent width)
                  marginTop: 10, // Set the top margin of the line
                }}
              />
            </View>

            <View>
              <View className="flex flex-row m-2">
                <Ionicons name="search" size="20" color="#2988EA" />
                <Text className="font-medium ml-2 text-base text-[#2988EA] ">
                  Youtube
                </Text>
              </View>
              <View
                style={{
                  height: 1, // Set the height of the line
                  backgroundColor: "#ccc", // Set the color of the line
                  width: "126%", // Set the width of the line (90% of the parent width)
                  marginTop: 10, // Set the top margin of the line
                }}
              />
            </View>
          </View>
          <View className="flex flex-row justify-between mr-12">
            <View>
              <View className="flex flex-row m-2">
                <Ionicons name="search" size="20" color="#2988EA" />
                <Text className="font-medium ml-2 text-base text-[#2988EA] ">
                  Pubg
                </Text>
              </View>
              <View
                style={{
                  height: 1, // Set the height of the line
                  backgroundColor: "#ccc", // Set the color of the line
                  width: "176%", // Set the width of the line (90% of the parent width)
                  marginTop: 10, // Set the top margin of the line
                }}
              />
            </View>

            <View>
              <View className="flex flex-row m-2">
                <Ionicons name="search" size="20" color="#2988EA" />
                <Text className="font-medium ml-2 text-base text-[#2988EA] ">
                  snooker
                </Text>
              </View>
              <View
                style={{
                  height: 1, // Set the height of the line
                  backgroundColor: "#ccc", // Set the color of the line
                  width: "126%", // Set the width of the line (90% of the parent width)
                  marginTop: 10, // Set the top margin of the line
                }}
              />
            </View>
          </View>
          <Text className="font-bold text-xl m-2">Suggested</Text>
          <View className="m-5">
            <Application />
            <Application />
          </View>
        </View>
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
export default Search;
