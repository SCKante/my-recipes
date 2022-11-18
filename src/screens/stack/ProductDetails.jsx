import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { colorsLight, HEIGHT, WIDTH } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { H5, H6 } from "../../components";

const ProductDetails = () => {
  const {
    params: { product },
  } = useRoute();
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.banner}>
        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navBtn} onPress={navigation.goBack}>
            <AntDesign name="left" size={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}>
            <AntDesign name="hearto" size={16} />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.row, { position: "absolute", bottom: 50, left: 16 }]}
        >
          <View style={styles.categoryProfileContainer}>
            <Image
              source={{
                uri: product.autorProfile,
              }}
              style={{ width: 35, height: 35 }}
              resizeMode="cover"
            />
          </View>
          <View>
            <H5 style={{ color: colorsLight.background }} numberOfLines={1}>
              {product.autor}
            </H5>
            <Text
              style={[
                styles.textlight,
                { fontSize: 10, color: colorsLight.background },
              ]}
            >
              Posted 1hour ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  banner: {
    width: WIDTH,
    height: HEIGHT * 0.6,
  },
  navbar: {
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: WIDTH,
  },
  navBtn: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: colorsLight.background,
    justifyContent: "center",
    alignItems: "center",
  },
  textlight: {
    fontWeight: "400",
    color: colorsLight.background,
    marginRight: 4,
  },
  categoryProfileContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 4,
    backgroundColor: "lightyellow",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colorsLight.textContrast,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
