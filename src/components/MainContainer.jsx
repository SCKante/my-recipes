import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Themes } from "../constants";

const { colorsLight } = Themes;

const MainContainer = ({ children, logo, justifyContent, alignItems }) => {
  return (
    <SafeAreaView style={[styles.container, { justifyContent, alignItems }]}>
      {logo && (
        <View style={styles.header}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsLight.background,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});

export default MainContainer;
