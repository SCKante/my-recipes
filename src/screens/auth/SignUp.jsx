import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  H1,
  MainContainer,
  Input,
  H4,
  Button,
  SocialIcon,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import { colorsLight } from "../../constants/theme";
import { useKeyboardVisible } from "../../hooks";

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isValidMail, setIsValidMail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnLabel, setBtnLabel] = useState("Continue");
  const isKeyboardVisible = useKeyboardVisible();
  return (
    <MainContainer justifyContent={"center"} logo>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <H1 style={{ textAlign: "center" }}>Sign Up</H1>
        {isValidMail ? (
          <>
            <Input
              label={"Name"}
              placeholder={"Enter your full name"}
              value={email}
              setValue={setEmail}
            />
            <Input
              label={"Password"}
              placeholder={"Enter your password"}
              secure
              value={password}
              setValue={setPassword}
            />
            <Input
              label={"Confirm Password"}
              placeholder={"Confirm your password"}
              secure
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </>
        ) : (
          <>
            <Input
              label={"Email"}
              placeholder={"Enter your email address"}
              value={email}
              setValue={setEmail}
              verifyMail
            />
            <Input
              label={"Verrification code"}
              placeholder={"Enter verrification code"}
              value={code}
              setValue={setCode}
            />
          </>
        )}

        <Button
          label={btnLabel}
          onPress={() => {
            if (btnLabel == "Continue") {
              setIsValidMail(true);
              setBtnLabel("Sign up");
            } else if (btnLabel == "Sign up") {
              navigation.push("signin");
            }
          }}
        />
      </View>
      {!isValidMail && !isKeyboardVisible && (
        <View
          style={{
            flex: 0.9,
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
            onPress={() => navigation.navigate("signin")}
          >
            <H4
              style={{
                fontWeight: "400",
                color: colorsLight.textContrast,
              }}
            >
              Already have an account?
              <H4 style={{ color: colorsLight.link }}> Login</H4>
            </H4>
          </TouchableOpacity>
        </View>
      )}
    </MainContainer>
  );
};

export default SignUp;
