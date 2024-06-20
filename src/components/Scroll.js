// import libraries
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Categories array
const categories = [
  {
    name: "Honkai:Star Rail",
    image: require("../../assets/h.webp"),
    title: "NOW AVAILABLE",
    Desc: "New 5-star character:Firefly",
  },
  {
    name: "Meet this year's Apple Design",
    image: require("../../assets/a.jpg"),
    Desc: "Award winners",
    title: "WWDC24",
  },
  {
    name: "Manor Cafe",
    image: require("../../assets/m.jpg"),
    title: "NOW AVAILABLE",
    Desc: "Collect beach balls",
  },
  {
    name: "Clash Royal",
    image: require("../../assets/c.jpg"),
    Desc: "Bow down to the Goblin Queen!",
    title: "NOW AVAILABLE",
  },
  {
    name: "Candy Crush Soda Saga",
    image: require("../../assets/candy.jpeg"),
    Desc: "Hit the Soda Cup bull's-eye",
    title: "HAPPENING NOW",
  },
  {
    name: "Cafeland",
    image: require("../../assets/cafe.jpg"),
    Desc: "Collect Sleppy Cats",
    title: "CafeLand",
  },
];

// create a component
const Scroll = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 420 }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryContainer}>
            <Text className="text-blue-400 font-bold text-xs">
              {item.title}
            </Text>
            <Text className="text-xl">{item.name}</Text>

            <Text className="text-xl text-gray-400">{item.Desc}</Text>
            <Image source={item.image} style={styles.categoryImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  categoryContainer: {
    width: 300,
    height: 300,
    marginTop: 40,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "start",
    padding: 10,
    // backgroundColor: "#f0f0f0", // Optional background color for better visualization
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryImage: {
    width: 310,
    height: 280,
    borderRadius: 10,
  },
});

// make this component available to the app
export default Scroll;
