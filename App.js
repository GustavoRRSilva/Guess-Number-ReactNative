import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./public/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
