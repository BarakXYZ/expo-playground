import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        Hello World!
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
    fontSize: 48,
  }
});
