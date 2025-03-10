import React, { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/Colors";

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
    <LinearGradient
      colors={[Colors.primary900, Colors.primaryYellow]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./public/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
