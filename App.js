import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(undefined);

  const pickedNumberHandler = (numberPicked) => {
    setPickedNumber(numberPicked);
  };

  let screen = <StartGame pickedNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./public/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
