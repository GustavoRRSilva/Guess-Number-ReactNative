import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOutContainer: {
    backgroundColor: "#72063c",
    overflow: "hidden",
    margin: 4,
    borderRadius: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
