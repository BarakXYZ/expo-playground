import { StyleSheet } from "react-native";

// Common text shadow props
const textShadowProps = {
  textShadowColor: 'black',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 4,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292524",
  },
  baseText: {
    color: "white",
    fontSize: 48,
    ...textShadowProps,
  },
  hyperLinkButton: {
    color: "white",
    fontSize: 24,
    ...textShadowProps,
    textDecorationLine: "underline",
  },
  hotText: {
    color: "#F0ABFC",
    fontSize: 48,
    ...textShadowProps,
  }
});
