import React, { useEffect, useRef } from "react";
import { Animated, Easing, Text } from "react-native";
import { useRecoilState } from "recoil";
import { apiLoadingState } from "state/atoms";

const Snackbar = () => {
  const [snackbarState, setSnackbarState] = useRecoilState(apiLoadingState);

  const animationValue = useRef(new Animated.Value(100)).current;
  const animation = useRef(
    Animated.timing(animationValue, {
      toValue: -100,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    })
  ).current;

  useEffect(() => {
    console.log(snackbarState);
    if (snackbarState.status === "Idle") {
      animation.reset();
      return;
    }

    animation.start();

    if (snackbarState.status === "Loading") {
      setTimeout(() => setSnackbarState({ status: "Idle", message: "" }), 10000);
      return;
    }

    setTimeout(() => setSnackbarState({ status: "Idle", message: "" }), 5000);
  }, [snackbarState]);

  const backgroundColor = getSnackbarColor(snackbarState.status);
  return (
    <Animated.View
      style={{
        height: 50,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor,
        position: "absolute",
        bottom: 100,
        transform: [{ translateY: animationValue }],
      }}
    >
      <Text>{snackbarState.message}</Text>
    </Animated.View>
  );
};

const getSnackbarColor = (status: "Success" | "Error" | "Loading" | "Idle") => {
  switch (status) {
    case "Error":
      return "#d33";

    case "Success":
      return "#3d3";

    default:
      return "#aaa";
  }
};

export default Snackbar;
