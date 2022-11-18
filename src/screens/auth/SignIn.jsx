import { KeyboardAvoidingView, Platform, View } from "react-native";
import React, { useState } from "react";
import {
  H1,
  MainContainer,
  Input,
  H5,
  Button,
  H4,
  SocialIcon,
} from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { colorsLight } from "../../constants/theme";
import { useKeyboardVisible } from "../../hooks";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isKeyboardVisible = useKeyboardVisible();
  return (
    <MainContainer justifyContent={"center"} logo>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
        behavior={"position"}
      >
        <H1 style={{ textAlign: "center" }}>Login</H1>
        <Input
          label={"Email"}
          placeholder={"Enter your email address"}
          value={email}
          setValue={setEmail}
          mt={20}
        />
        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          secure
          value={password}
          setValue={setPassword}
          mt={20}
        />
        <TouchableOpacity style={{ alignSelf: "flex-end", paddingVertical: 8 }}>
          <H5>Forgot password?</H5>
        </TouchableOpacity>
        <Button label="Sign In" onPress={() => navigation.navigate("tabs")} />
      </KeyboardAvoidingView>
      <View style={{ height: 20 }} />
      {!isKeyboardVisible && (
        <View
          style={{
            flex: 0.7,
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: colorsLight.textContrast,
                }}
              />
              <H4 style={{ color: colorsLight.textContrast, padding: 10 }}>
                Or
              </H4>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: colorsLight.textContrast,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SocialIcon
                onPress={() => console.log("facebook")}
                icon={require("../../../assets/facebook.png")}
              />
              <View style={{ width: 10 }} />
              <SocialIcon
                onPress={() => console.log("google")}
                icon={require("../../../assets/google.png")}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => navigation.navigate("signup")}
          >
            <H4
              style={{
                fontWeight: "400",
                color: colorsLight.textContrast,
              }}
            >
              Don't have an account?
              <H4 style={{ color: colorsLight.link }}> Sign up</H4>
            </H4>
          </TouchableOpacity>
        </View>
      )}
    </MainContainer>
  );
};

export default SignIn;
