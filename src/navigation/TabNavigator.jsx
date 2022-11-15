import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { TabHandler, TabsShape } from "../components";
import TabsUi from "../components/TabsUi";
import { WIDTH } from "../constants/theme";
import { Favorite, Home, Profile, Search } from "../screens";

const Tab = createBottomTabNavigator();

const tabs = [
  { name: "home", action: () => console.log("home") },
  { name: "search", action: () => console.log("search") },
  { name: "", action: () => console.log("logo") },
  { name: "favorite", action: () => console.log("favorite") },
  { name: "profile", action: () => console.log("profile") },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <TabsUi {...props} state={props.state} routes={props.state.routes} />
      )}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="recipes" component={Search} />
      <Tab.Screen name="favorite" component={Favorite} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
