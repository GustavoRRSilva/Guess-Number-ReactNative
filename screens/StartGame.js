import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGame() {
  return (
    <View>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGame;
