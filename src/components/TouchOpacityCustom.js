//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const TouchableOpacityCustom = ({ text, ClassName, textBg }) => {
  return (
    <View>
      <TouchableOpacity className={ClassName}>
        <Text className={textBg}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
//make this component available to the app
export default TouchableOpacityCustom;
