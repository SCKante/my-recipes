import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { H3, H4, H5, H6 } from "./typography";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colorsLight, WIDTH } from "../constants/theme";
import { ScrollView } from "react-native-gesture-handler";

const CARD_WIDTH = WIDTH * 0.32;

const Categories = ({ categorie, data, viewAll }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.row,
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <H3>{categorie}</H3>
        <TouchableOpacity onPress={viewAll} style={styles.row}>
          <H6 style={styles.textlight}>View All</H6>
          <AntDesign name="right" size={12} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        snapToInterval={CARD_WIDTH + 10}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        scrollEventThrottle={16}
      >
        {Array(6)
          .fill(0)
          .map((category, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{
                  width: CARD_WIDTH,
                  marginRight: 10,
                }}
              >
                <ImageBackground
                  source={{
                    uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/gluten-free-wreath-1f4594c.jpg?quality=90&webp=true&resize=600,545",
                  }}
                  style={{ width: "100%", height: CARD_WIDTH * 1.2 }}
                  borderRadius={12}
                >
                  <View style={[styles.row, styles.rating]}>
                    <FontAwesome
                      name="star"
                      size={12}
                      color={colorsLight.primary}
                    />
                    <H6 style={{ color: colorsLight.primary, marginLeft: 4 }}>
                      4.2
                    </H6>
                  </View>
                </ImageBackground>
                <Text
                  style={[styles.textlight, styles.description]}
                  numberOfLines={2}
                >
                  Lorem ipsum dolor sit amet con sect etur adipi sicing elit.
                </Text>
                <View key={i} style={styles.row}>
                  <View style={styles.categoryProfileContainer}>
                    <Image
                      source={{
                        uri: "https://www.officeriders.com/blog/wp-content/uploads/Principale-Ai%CC%88na.jpg",
                      }}
                      style={{ width: 35, height: 35 }}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <H6 style={{ color: colorsLight.text }} numberOfLines={1}>
                      {"Pamela Haydon "}
                    </H6>
                    <Text
                      style={[
                        styles.textlight,
                        { fontSize: 10, color: colorsLight.text },
                      ]}
                    >
                      Posted 1hour ago
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textlight: {
    fontWeight: "400",
    color: colorsLight.text,
    marginRight: 4,
  },
  rating: {
    alignSelf: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: colorsLight.background,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 12,
  },
  categoryProfileContainer: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 4,
    backgroundColor: "lightyellow",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colorsLight.textContrast,
  },
  description: {
    fontSize: 10,
    color: colorsLight.text,
    textAlign: "justify",
    paddingVertical: 6,
  },
});
