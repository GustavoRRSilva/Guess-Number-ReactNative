import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaryYellow,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primaryYellow,
    padding: 12,
    borderRadius: 10,
  },
});
