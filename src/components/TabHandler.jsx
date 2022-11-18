import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";
import { colorsLight } from "../constants/theme";
import { Shadow } from "react-native-shadow-2";

const TabHandler = ({ tabWidth, routes, state, navigation }) => {
  const getIcon = (tab, focused) => {
    switch (tab) {
      case "home":
        if (focused) {
          return <Octicons name="home" size={22} color={colorsLight.primary} />;
        }
        return (
          <Octicons name="home" size={22} color={colorsLight.textContrast} />
        );
      case "search":
        if (focused) {
          return (
            <Octicons name="search" size={22} color={colorsLight.primary} />
          );
        }
        return (
          <Octicons name="search" size={22} color={colorsLight.textContrast} />
        );
      case "recipes":
        if (focused) {
          return <Octicons name="home" size={22} color={colorsLight.primary} />;
        }
        return (
          <Octicons name="home" size={22} color={colorsLight.textContrast} />
        );
      case "favorite":
        if (focused) {
          return (
            <Octicons name="heart" size={22} color={colorsLight.primary} />
          );
        }
        return (
          <Octicons name="heart" size={22} color={colorsLight.textContrast} />
        );
      case "profile":
        if (focused) {
          return (
            <Octicons name="person" size={22} color={colorsLight.primary} />
          );
        }
        return (
          <Octicons name="person" size={22} color={colorsLight.textContrast} />
        );
      default:
        break;
    }
  };

  return (
    <Shadow
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
      startColor={"#eb906620"}
      paintInside={false}
    >
      {routes.map((tab, i) => {
        const isFocused = state.index === i;
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: tab.key,
          });
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: tab.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: tab.name, merge: true });
          }
        };
        if (tab.name === "recipes") {
          return (
            <TouchableOpacity
              key={"logo"}
              style={{
                width: tabWidth,
                height: 75,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: colorsLight.primary,
                  width: tabWidth * 0.6,
                  height: tabWidth * 0.6,
                  borderRadius: (tabWidth * 0.6) / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: -75 / 4,
                }}
              >
                <Shadow
                  distance={4}
                  startColor={"#eb9066d8"}
                  endColor={"#ff00ff10"}
                  offset={[0, 2]}
                >
                  <View
                    style={{
                      backgroundColor: colorsLight.primary,
                      width: tabWidth * 0.6,
                      height: tabWidth * 0.6,
                      borderRadius: (tabWidth * 0.6) / 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../../assets/chef.png")}
                      resizeMode="contain"
                      style={{ width: 18, height: 18, tintColor: "white" }}
                    />
                  </View>
                </Shadow>
              </View>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onLongPress={onLongPress}
            onPress={onPress}
            key={i}
          >
            <View
              style={{
                width: tabWidth,
                height: 75,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {getIcon(tab.name, isFocused)}
            </View>
          </TouchableOpacity>
        );
      })}
    </Shadow>
  );
};

export default TabHandler;
