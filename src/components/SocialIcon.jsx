import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { H5 } from "./typography";
import { colorsLight } from "../constants/theme";

const SocialIcon = ({ icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: colorsLight.textContrast,
        borderRadius: 8,
      }}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default SocialIcon;
