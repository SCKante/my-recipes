import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigator } from "./src/navigation";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { Themes } from "./src/constants";

const { colorsLight } = Themes;

if (Platform.OS === "android") {
  setBackgroundColorAsync(colorsLight.background);
}

const App = () => {
  const [onboarded, setOnboarded] = useState();

  const getStorage = async () => {
    const onboarded = await AsyncStorage.getItem("ONBOARDED");
    setOnboarded(JSON.parse(onboarded));
  };

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <>
      <NavigationContainer>
        <StackNavigator onboarded={onboarded} />
      </NavigationContainer>
      <StatusBar />
    </>
  );
};

export default App;
