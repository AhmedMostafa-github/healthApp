import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 20,
    minHeight: 80,
  },
  track: {
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
    marginTop: 30,
  },
  progress: {
    height: "100%",
    borderRadius: 2,
  },
  circle: {
    position: "absolute",
    top: 12,
    width: 50,
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1,
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
