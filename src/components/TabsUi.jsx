import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colorsLight, WIDTH } from "../constants/theme";
import TabsShape from "./TabsShape";
import TabHandler from "./TabHandler";

const TabsUi = ({ routes, state, navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const tabWidth = useMemo(() => WIDTH / routes.length, [routes.length]);
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "transparent",
        width: WIDTH,
        height: 75,
        bottom,
      }}
    >
      <TabsShape tabWidth={tabWidth} />
      <View style={StyleSheet.absoluteFill}>
        <TabHandler {...{ routes, tabWidth, state, navigation }} />
      </View>
    </View>
  );
};

export default TabsUi;
