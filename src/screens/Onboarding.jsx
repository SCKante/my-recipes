import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useDerivedValue,
} from "react-native-reanimated";
import EvillIcons from "react-native-vector-icons/EvilIcons";
import { Themes } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainContainer } from "../components";

const { colorsLight, WIDTH, sizes } = Themes;
const SLIDES = [
  {
    label: "Step-by-step cooking recipes",
    image: require("../../assets/slide1.png"),
  },
  {
    label: "Discover new tasty recipes everyday",
    image: require("../../assets/slide2.png"),
  },
  {
    label: "Publish your own secret recipes",
    image: require("../../assets/slide3.png"),
  },
];

const Dot = ({ scrollX, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const Onboarding = () => {
  const scrollX = useSharedValue(0);
  const navigation = useNavigation();
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });
  const onSkip = async () => {
    await AsyncStorage.setItem("ONBOARDED", "true");
    navigation.navigate("signin");
  };
  const indicatorStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [0, WIDTH, WIDTH * 2],
      [-16, 0, 16]
    );
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <MainContainer justifyContent={"center"} logo>
      <View style={{ height: 58 }} />
      <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH}
        decelerationRate="fast"
        scrollEventThrottle={16}
        bounces={false}
      >
        {SLIDES.map((item, index) => {
          return (
            <View key={index} style={styles.slideContainer}>
              <Image
                source={item.image}
                style={{ width: 250, height: 250 }}
                resizeMode="contain"
              />
              <Text style={styles.label}>{item.label}</Text>
            </View>
          );
        })}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={{ flex: 1 }} />
        <View style={styles.dotContainer}>
          <Animated.View style={[styles.indicator, indicatorStyle]} />
          {SLIDES.map((_, index) => {
            return <Dot key={index} scrollX={scrollX} index={index} />;
          })}
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => onSkip()}
          >
            <Text style={{ marginRight: -5 }}>Skip</Text>
            <EvillIcons
              name="chevron-right"
              size={22}
              color={colorsLight.text}
            />
          </TouchableOpacity>
        </View>
      </View>
    </MainContainer>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    width: WIDTH,
    paddingTop: sizes.large * 2,
    alignItems: "center",
  },
  label: {
    fontSize: sizes.large,
    textAlign: "center",
    fontWeight: "600",
    paddingHorizontal: sizes.large * 2.2,
    marginVertical: sizes.regular,
  },
  footer: {
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizes.regular,
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colorsLight.text,
    marginHorizontal: 4,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colorsLight.primary,
    position: "absolute",
  },
});
