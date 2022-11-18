import { StyleSheet, View, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colorsLight, WIDTH } from "../constants/theme";
import { H4, H6 } from "./typography";

const BannerFooter = ({ scrollX, data }) => {
  const inputRange = [...data.map((_, i) => i * WIDTH)];
  const indicatorStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [2, 18, 34, 50, 66],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateX }],
    };
  });
  const verticalScrollStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [0, -70, -140, -210, -280],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY }],
    };
  });
  return (
    <View style={[styles.row, styles.bannerFooter]}>
      <Animated.View
        style={[
          { position: "absolute", top: 0, left: 16 },
          verticalScrollStyle,
        ]}
      >
        {data.map((item, i) => {
          return (
            <View
              key={i}
              style={[styles.row, { height: 70, alignItems: "center" }]}
            >
              <View style={styles.bannerProfileContainer}>
                <Image
                  source={{ uri: item.autorProfile }}
                  style={{ width: 35, height: 35 }}
                  resizeMode="cover"
                />
              </View>
              <View>
                <H4 style={{ color: colorsLight.background }}>{item.autor}</H4>
                <H6 style={styles.textLight}>Posted 1hour ago</H6>
              </View>
            </View>
          );
        })}
      </Animated.View>
      <View style={[styles.row, { position: "absolute", right: 16 }]}>
        <Animated.View style={[styles.indicator, indicatorStyle]} />
        {data.map((_, i) => {
          return <View key={i} style={styles.dotIndicator} />;
        })}
      </View>
    </View>
  );
};

export default BannerFooter;

const styles = StyleSheet.create({
  textLight: {
    color: colorsLight.background,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  dotIndicator: {
    width: 8,
    height: 8,
    backgroundColor: colorsLight.background,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  bannerFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 70,
    width: WIDTH,
    overflow: "hidden",
  },
  bannerProfileContainer: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 8,
    backgroundColor: "lightyellow",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colorsLight.textContrast,
  },
  indicator: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colorsLight.background,
  },
});
