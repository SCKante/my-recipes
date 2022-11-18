import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colorsLight, WIDTH } from "../constants/theme";

const SearchInput = () => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    Keyboard.addListener("keyboardWillHide", inputRef.current.blur());
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[styles.contentContainer, { flexDirection: "row", flex: 1 }]}
      >
        <AntDesign name={"search1"} size={20} color={colorsLight.border} />
        <TextInput
          ref={inputRef}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          focusable
          placeholder="Search"
          style={{ flex: 1, paddingHorizontal: 10 }}
        />
        {focused && (
          <TouchableOpacity
            style={styles.inputClear}
            onPress={() => inputRef.current.clear()}
          >
            <AntDesign name={"close"} size={16} color={colorsLight.border} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.contentContainer,
          { marginLeft: 8, borderRadius: 5, paddingHorizontal: 10 },
        ]}
      >
        <Ionicons
          name={"md-filter-sharp"}
          size={24}
          color={colorsLight.border}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: WIDTH - 32,
    marginTop: 16,
  },
  contentContainer: {
    alignItems: "center",
    height: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#f9f9fa",
    backgroundColor: "#f9f9fa",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    borderRadius: 10,
  },
  inputClear: {
    position: "absolute",
    right: 10,
  },
});
