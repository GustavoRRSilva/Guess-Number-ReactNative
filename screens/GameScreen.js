import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { Title } from "../components/Title";

const GameScreen = () => {
  const [guessedValue, setGuessedValue] = useState(0);
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>{guessedValue}</Text>
        <Text>Higher or lower?</Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton>+</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton>-</PrimaryButton>
          </View>
        </View>
      </View>
      <View>Log rounds</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
