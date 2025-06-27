import { StyleSheet } from "react-native";
import { ANIMATION_CONSTANTS } from "./successAnimation.constants";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: ANIMATION_CONSTANTS.SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: ANIMATION_CONSTANTS.CARD_WIDTH,
    height: ANIMATION_CONSTANTS.CARD_HEIGHT,
    borderRadius: 32,
  },
  checkmark: {
    color: "#4DB6AC",
    fontSize: 48,
    fontWeight: "bold",
    position: "absolute",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 24,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1000,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
  },
});
