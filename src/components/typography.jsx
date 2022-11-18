import { StyleSheet, Text } from "react-native";

export const H1 = ({ children, style, numberOfLines }) => (
  <Text {...{ numberOfLines }} style={[styles.h1, style]}>
    {children}
  </Text>
);
export const H2 = ({ children, style, numberOfLines }) => (
  <Text {...{ numberOfLines }} style={[styles.h2, style]}>
    {children}
  </Text>
);
export const H3 = ({ children, style, numberOfLines }) => (
  <Text {...{ numberOfLines }} style={[styles.h3, style]}>
    {children}
  </Text>
);
export const H4 = ({ children, style, numberOfLines }) => (
  <Text {...{ numberOfLines }} style={[styles.h4, style]}>
    {children}
  </Text>
);
export const H5 = ({ children, style, numberOfLines }) => (
  <Text {...{ numberOfLines }} style={[styles.h5, style]}>
    {children}
  </Text>
);
export const H6 = ({ children, style, numberOfLines }) => (
  <Text {...{ numberOfLines }} style={[styles.h6, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  h1: {
    fontSize: 34,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 22,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 19,
    fontWeight: "500",
  },
  h4: {
    fontSize: 16,
    fontWeight: "bold",
  },
  h5: {
    fontSize: 14,
    fontWeight: "bold",
  },
  h6: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
