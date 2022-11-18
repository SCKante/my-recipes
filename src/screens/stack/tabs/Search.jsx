import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  H2,
  H3,
  H5,
  H6,
  MainContainer,
  SearchInput,
} from "../../../components";
import { colorsLight, HEIGHT, WIDTH } from "../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const defaultPopularChefs = [
  {
    id: "001",
    thumbnail: "",
    name: "Kate Parker",
    followers: 2580,
  },
  {
    id: "002",
    thumbnail: "",
    name: "Jared Lloyd",
    followers: 2580,
  },
  {
    id: "003",
    thumbnail: "",
    name: "Jessica Grant",
    followers: 2580,
  },
  {
    id: "004",
    thumbnail: "",
    name: "Jack Nelson",
    followers: 2580,
  },
];

const defaultTags = [{}];

const Search = () => {
  const [popularChefs, setPopularChefs] = useState(defaultPopularChefs);

  const [randomMeal, setRandomMeal] = useState([]);
  const index = Math.random(0, 10);
  const getRandomMeals = async function () {
    const response = await fetch(randomMealUrl);
    const data = await response.json();
    setRandomMeal(data.meals[0]);
  };

  useEffect(() => {
    getRandomMeals().catch((err) => console.log(err));
  }, []);
  return (
    <MainContainer alignItems={"center"}>
      <SearchInput />
      <View style={styles.banner}>
        {randomMeal.strMealThumb && (
          <Image
            source={{ uri: randomMeal.strMealThumb }}
            style={StyleSheet.absoluteFillObject}
          />
        )}

        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255,255,255,.3)",
            padding: 10,
          }}
        >
          <View style={styles.categorieLabel}>
            <H6 style={{ fontSize: 10, color: colorsLight.background }}>
              Popular
            </H6>
          </View>
          <H2>{randomMeal?.strCategory}</H2>
          <H6>156 Recipes</H6>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "flex-start", width: WIDTH - 32 }}>
        <H3>Popular chefs</H3>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          {popularChefs.map((item, i) => {
            return (
              <Pressable
                onPress={() => console.log("chef:", item.name)}
                key={item.id}
                style={[styles.popularChef, { marginLeft: i !== 0 ? 10 : 0 }]}
              >
                <View style={styles.thumbnail}></View>
                <View>
                  <H6>{item.name}</H6>
                  <Text style={styles.followers}>
                    {item.followers} followers
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </MainContainer>
  );
};

export default Search;

const styles = StyleSheet.create({
  banner: {
    width: WIDTH - 32,
    height: HEIGHT * 0.31,
    overflow: "hidden",
    backgroundColor: "lightyellow",
    marginTop: 20,
    borderRadius: 12,
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginBottom: 20,
  },
  categorieLabel: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: colorsLight.primary,
    alignSelf: "flex-start",
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightyellow",
    marginBottom: 8,
  },
  popularChef: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  followers: {
    fontSize: 11,
    color: colorsLight.subText,
  },
});
