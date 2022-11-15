import { Dimensions } from "react-native";

export const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export const colors = {
  success: "#00BA90",
  darkGray: "#6c757d",
  lightGray: "#cfd4da",
};

export const colorsLight = {
  background: "#FFFFFF",
  paper: "#EAEBF4",
  primary: "#ed6e06",
  accent: "#B446BF",
  titleText: "#1d1d1e",
  subText: colors.darkGray,
  text: "#1d1d1e",
  textContrast: "#D3D8E8",
  disabled: colors.mediumGray,
  border: colors.darkGray,
  placeholder: colors.darkGray,
  link: "#93d4f4",
};

const tiny = 6;
const small = tiny * 2;
const regular = tiny * 2;
const large = regular * 2;

export const sizes = {
  tiny,
  small,
  regular,
  large,
};

const Themes = { colors, colorsLight, sizes, WIDTH, HEIGHT };

export default Themes;
