import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import TouchableOpacityCustom from "./TouchOpacityCustom";

const Application = () => {
  return (
    <View>
      <View>
        {/* linkedin */}
        <View className="flex flex-row mt-4">
          <Image
            source={require("../../assets/image.png")}
            className="w-12 h-11 rounded-xl "
          />
          <View className="m-2">
            <Text className="font-bold ">LinkedIn: Job Search & News</Text>
            <Text className="font-light">Networks and find jobs..</Text>
          </View>

          <TouchableOpacityCustom
            text={"Update"}
            textBg={"text-blue-600 font-bold"}
            ClassName={"items-center bg-gray-300 p-2  rounded-xl text-xl "}
          />
        </View>
        {/* facebook */}
        <View className="flex flex-row mt-4">
          <Image
            source={require("../../assets/sahaj.png")}
            className="w-12 h-11 rounded-xl "
          />
          <View className="m-2">
            <Text className="font-bold ">SahajYatri: Travel,Fun & Book</Text>
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
            <Text className="font-bold ">YetaiEats: Food Order , & Sell</Text>
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
            <Text className="font-bold ">CodeRepository: Fun Coding</Text>
            <Text className="font-light">Networks and find jobs..</Text>
          </View>

          <TouchableOpacityCustom
            text={"Update"}
            textBg={"text-blue-600 font-bold"}
            ClassName={"items-center bg-gray-300 p-2  rounded-xl text-xl "}
          />
        </View>
      </View>
    </View>
  );
};

export default Application;
