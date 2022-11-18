import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  BannerFooter,
  Categories,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "../../../components";
import { colorsLight, HEIGHT, WIDTH } from "../../../constants/theme";
import { FEATURED_RECIPES } from "../../../config";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Home = () => {
  const navigation = useNavigation();
  const [dummyData, setDummyData] = useState([]);
  const [liked, setLiked] = useState(false);
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => (scrollX.value = e.contentOffset.x),
  });
  const getMeals = async function () {
    const response = await fetch(API_URL);
    const data = await response.json();
    setDummyData(data.categories);
  };

  useEffect(() => {
    getMeals().catch((err) => console.log(err));
  }, []);
  // console.log(JSON.stringify(dummyData, null, 2));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colorsLight.background }}>
      <View
        style={{
          width: WIDTH,
          height: HEIGHT * 0.5,
        }}
      >
        <Animated.ScrollView
          onScroll={scrollHandler}
          horizontal
          style={{ flex: 1 }}
          snapToInterval={WIDTH}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate="fast"
        >
          {FEATURED_RECIPES.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.banner}
                key={index}
                onPress={() =>
                  navigation.navigate("productDetails", { product: item })
                }
              >
                <Image
                  source={{
                    uri: item.thumbnail,
                  }}
                  style={{
                    ...StyleSheet.absoluteFillObject,
                  }}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.7)"]}
                  style={styles.bannerContentContainer}
                >
                  <View>
                    <H6 style={styles.textLight}>Featured Recipe</H6>
                    <View style={{ height: 10 }} />
                    <H2 style={styles.title}>{item.recipe}</H2>
                    <View style={{ height: 10 }} />
                    <View style={styles.row}>
                      <View style={styles.row}>
                        <AntDesign
                          name="clockcircleo"
                          size={14}
                          color={colorsLight.background}
                          style={{ marginRight: 8 }}
                        />
                        <H5 style={styles.textLight}>{item.duration}</H5>
                      </View>
                      <View style={styles.row}>
                        <AntDesign
                          name={liked ? "heart" : "hearto"}
                          size={14}
                          color={colorsLight.background}
                          style={{ marginRight: 8 }}
                          onPress={() => setLiked(!liked)}
                        />
                        <H5 style={styles.textLight}>{item.likeCount}</H5>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </Animated.ScrollView>
        <BannerFooter data={FEATURED_RECIPES} scrollX={scrollX} />
      </View>
      <View style={{ flex: 1 }}>
        <Categories categorie="Today's Recipes" />
        <Categories categorie="Categories" />
        <Categories categorie="Popular" />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    width: WIDTH,
    height: HEIGHT * 0.6,
  },
  title: {
    color: colorsLight.background,
    paddingRight: 60,
  },
  bannerContentContainer: {
    flex: 1,
    padding: 16,
    paddingTop: StatusBar.currentHeight,
  },
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
