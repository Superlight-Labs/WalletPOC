import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    padding: 12,
    backgroundColor: "#8fa2ff",
    minHeight: "90%",
  },
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    paddingBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerArea: {
    justifyContent: "flex-start",
  },
  pickerHeading: {
    position: "absolute",
    marginTop: 20,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  tokenPicker: {
    borderRadius: 12,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginTop: 12,
  },
  tokenPickerItem: {
    height: 120,
  },
  arrowDown: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f7f7f7",
    padding: 12,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 14,
  },
  actionButtonDisabled: {
    opacity: 0.5,
    height: 42,
    width: "100%",
    backgroundColor: "#3828e0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  actionButton: {
    height: 42,
    width: "100%",
    backgroundColor: "#3828e0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
  },
  availableValueText: {
    textAlign: "right",
    marginTop: 4,
  },
  routeErrorText: {
    color: "red",
    textAlign: "right",
    fontSize: 12,
    marginTop: 4,
  },
  feesText: {
    textAlign: "right",
    fontSize: 12,
    marginTop: 4,
  },
  switchArea: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 12,
  },
  switchButton: {
    padding: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "lightblue",
  },
  switchButtonInactive: {
    padding: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "lightgrey",
  },
  switchPadding: {
    width: 12,
  },

  approvalModalParent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  approvalModalChild: {
    width: 160,
    height: 120,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
});
