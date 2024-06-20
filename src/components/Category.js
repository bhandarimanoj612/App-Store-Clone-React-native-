// import libraries
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

// Categories array
const categories = [
  { name: "Action", image: require("../../assets/actions.jpeg") },
  { name: "Music", image: require("../../assets/music.png") },
  { name: "Indie", image: require("../../assets/indie.jpeg") },
  { name: "Racing", image: require("../../assets/racing.png") },
  { name: "AR Games", image: require("../../assets/ar-games.jpeg") },
  { name: "Sports", image: require("../../assets/sports.png") },
];

// create a component
const Category = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <View
            key={index}
            style={{
              width: 100,
              height: 50, // Increased height to fit image and text
              backgroundColor: "white",
              marginHorizontal: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              marginTop: 10,
            }}
            className="flex flex-row "
          >
            <Image
              source={item.image}
              style={{
                width: 30,
                height: 30,
                marginBottom: 5,
                borderRadius: 100,
                marginRight: 5,
              }}
            />
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// make this component available to the app
export default Category;
