// import libraries
import { ImageBackground } from "react-native";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
import TopScreen from "../components/TopScreen";
import TouchableOpacityCustom from "../components/TouchOpacityCustom";

// create a component
const HomeScreen = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <ScrollView className="bg-gray-100">
      <View className="mt-14 ml-4 ">
        {/* Today Section */}
        <TopScreen text={"Today"} today={today} />

        {/* TouchableOpacity Section */}
        <TouchableOpacity style={styles.touchableContainer}>
          <ImageBackground
            source={require("../../assets/honkai2.png")}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <View className="bg-[#5CB9AE] w-[43%] h-11 rounded-r-xl p-2">
              <Text className="text-white font-bold">NOW AVAILABLE</Text>
            </View>

            <View className="flex-1 justify-end p-4">
              <Text className="text-white font-bold mt-40 ml-4">
                MAJOR UPDATE
              </Text>
              <Text className="text-white font-bold mt-10 ml-4 text-2xl">
                Say farewell to Penacony
              </Text>
              <Text className="text-white font-bold ml-6 mb-3 mt-5">
                And welcome Firefly to Honkai: Star Rail
              </Text>
            </View>
          </ImageBackground>

          <View className="bg-[#52A79D] flex flex-row justify-evenly p-2">
            <Image
              source={require("../../assets/honkai.png")}
              className="w-12 h-11 rounded-xl mt-3"
            />
            <View className="mt-3">
              <Text className="text-gray-200 font-bold">Honkai: Star Rail</Text>
              <Text className="text-[#090f0e]">A Space Fantasy RPG</Text>
            </View>
            <View>
              <TouchableOpacityCustom
                text={"Get"}
                textBg={"text-white font-bold"}
                ClassName="items-center bg-[#aac9c6] p-2 mt-3 rounded-xl text-xl text-white"
              />
              <Text className="text-[#46ffe9] text-xs font-medium">
                In-App Purchase
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Our Favourite Section */}
        <View className="mt-14 m-4">
          <View className="flex flex-row space-x-24 p-1   bg-white rounded-xl">
            <View className="flex flex-col ">
              <Text className="font-bold text-gray-400 text-2xl m-2">
                Our Favourite
              </Text>
              <Text className="font-bold text-3xl">
                Top iphone apps this week
              </Text>
              <View>
                {/* linkedin */}
                <View className="flex flex-row mt-4">
                  <Image
                    source={require("../../assets/image.png")}
                    className="w-12 h-11 rounded-xl "
                  />
                  <View className="m-2">
                    <Text className="font-bold ">
                      LinkedIn: Job Search & News
                    </Text>
                    <Text className="font-light">Networks and find jobs..</Text>
                  </View>

                  <TouchableOpacityCustom
                    text={"Update"}
                    textBg={"text-blue-600 font-bold"}
                    ClassName={
                      "items-center bg-gray-300 p-2  rounded-xl text-xl "
                    }
                  />
                </View>
                {/* facebook */}
                <View className="flex flex-row mt-4">
                  <Image
                    source={require("../../assets/sahaj.png")}
                    className="w-12 h-11 rounded-xl "
                  />
                  <View className="m-2">
                    <Text className="font-bold ">
                      SahajYatri: Travel,Fun & Book
                    </Text>
                    <Text className="font-light">Networks and find jobs..</Text>
                  </View>

                  <TouchableOpacityCustom
                    text={"Open"}
                    textBg={"text-blue-600 font-bold"}
                    ClassName={
                      "items-center bg-gray-300 pl-3 pr-3 pt-2 pb-2 rounded-xl text-xl "
                    }
                  />
                </View>
                {/* twitter */}
                <View className="flex flex-row mt-4">
                  <Image
                    source={require("../../assets/yatai.png")}
                    className="w-12 h-11 rounded-xl "
                  />
                  <View className="m-2">
                    <Text className="font-bold ">
                      YetaiEats: Food Order , & Sell
                    </Text>
                    <Text className="font-light">Networks and find jobs..</Text>
                  </View>

                  <TouchableOpacityCustom
                    text={"Open"}
                    textBg={"text-blue-600 font-bold"}
                    ClassName={
                      "items-center bg-gray-300 pl-3 pr-3 pt-2 pb-2  rounded-xl text-xl "
                    }
                  />
                </View>
                {/* instagram */}
                <View className="flex flex-row mt-4">
                  <Image
                    source={require("../../assets/code.png")}
                    className="w-12 h-11 rounded-xl "
                  />
                  <View className="m-2">
                    <Text className="font-bold ">
                      CodeRepository: Fun Coding
                    </Text>
                    <Text className="font-light">Networks and find jobs..</Text>
                  </View>

                  <TouchableOpacityCustom
                    text={"Update"}
                    textBg={"text-blue-600 font-bold"}
                    ClassName={
                      "items-center bg-gray-300 p-2  rounded-xl text-xl "
                    }
                  />
                </View>
              </View>
            </View>
            <View>
              <Image
                source={require("../../assets/manoj.jpg")}
                className="w-10 h-10 rounded-full"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  touchableContainer: {
    width: "90%",
    height: "auto",
    borderRadius: 10,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden",
    padding: 4,
    backgroundColor: "#5CB9AE",
    shadowColor: "#000",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});

//make this component available to the app
export default HomeScreen;
