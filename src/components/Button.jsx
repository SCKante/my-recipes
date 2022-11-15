import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { H5 } from "./typography";
import { Themes } from "../constants";

const { colorsLight, WIDTH } = Themes;

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: WIDTH - 32,
        height: 50,
        borderRadius: 10,
        backgroundColor: colorsLight.primary,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <H5 style={{ color: colorsLight.background }}>{label}</H5>
    </TouchableOpacity>
  );
};

export default Button;
