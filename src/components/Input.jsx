import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import { Themes } from "../constants";
import { H3, H4, H5 } from "./typography";

const { WIDTH, colorsLight } = Themes;

const Input = ({ label, placeholder, secure, value, setValue, verifyMail }) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ width: WIDTH - 32, marginTop: 20 }}>
      <H4>{label}</H4>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: focused
              ? colorsLight.primary
              : colorsLight.textContrast,
          },
        ]}
        placeholder={placeholder}
        secureTextEntry={secure && !showPassword}
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {secure && (
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={{ position: "absolute", right: 16, top: 44 }}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={18}
            color={colorsLight.textContrast}
          />
        </Pressable>
      )}
      {verifyMail && focused && (
        <TouchableOpacity style={styles.verifybtn}>
          <H5 style={{ color: colorsLight.primary }}>Verify</H5>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 8,
  },
  verifybtn: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colorsLight.primary,
    marginTop: 8,
    borderRadius: 5,
  },
});
