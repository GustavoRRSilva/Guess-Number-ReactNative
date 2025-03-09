import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGame() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (numberValue) => {
    setEnteredNumber(numberValue);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    let enteredNumberChangedToNumeric;

    try {
      enteredNumberChangedToNumeric = Number(enteredNumber);
    } catch (error) {
      return console.log(error);
    }

    if (
      enteredNumberChangedToNumeric > 0 &&
      enteredNumber <= 99 &&
      !isNaN(enteredNumberChangedToNumeric)
    ) {
      //Alert.alert("Correct value!", "Thanks for give a correct number!");
      return;
    }
    return Alert.alert(
      "Incorrect value!",
      "Number has to be a number between 1 and 99!",
      [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => resetInputHandler(),
        },
      ]
    );
  };

  return (
    <View style={styles.bg}>
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={2}
          style={styles.numberInput}
          keyboardType="numeric"
          onChangeText={(text) => numberInputHandler(text)}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    width: "45%",
    borderRadius: 20,
  },
});
export default StartGame;
