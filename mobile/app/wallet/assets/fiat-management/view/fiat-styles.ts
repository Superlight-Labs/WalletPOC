import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    margin: 12,
  },
  input: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 14,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  actionButton: {
    height: 42,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#21bf73",
  },
  dangerButton: {
    height: 42,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#bf2123",
  },
  actionButtonText: {
    color: "#21bf73",
    fontSize: 16,
  },
  dangerButtonText: {
    color: "#bf2123",
    fontSize: 16,
  },
  headerButton: {},
  headerButtonText: {
    color: "blue",
  },
});
