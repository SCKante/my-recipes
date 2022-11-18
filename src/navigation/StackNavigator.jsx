import { createStackNavigator } from "@react-navigation/stack";
import {
  Onboarding,
  ProductDetails,
  ResetPassword,
  SignIn,
  SignUp,
} from "../screens";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const StackNavigator = ({ onboarded }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={onboarded ? "signin" : "onboarding"}
    >
      {!onboarded && <Stack.Screen name="onboarding" component={Onboarding} />}
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="resetpasword" component={ResetPassword} />
      <Stack.Screen name="tabs" component={TabNavigator} />
      <Stack.Screen name="productDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
