import React, { useEffect, useRef } from "react";
import { PanResponder, View } from "react-native";

import { Stack, Text } from "@tamagui/core";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { styles } from "./styles";

const SPRING_CONFIG = {
  damping: 20,
  mass: 0.5,
  stiffness: 200,
  overshootClamping: true,
};

interface StepperProps {
  currentStep: number;
  totalSteps?: number;
  backgroundColor?: string;
  activeColor?: string;
  textColor?: string;
  onStepChange?: (step: number) => void;
  gesturesEnabled?: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  currentStep,
  totalSteps = 12,
  backgroundColor = "#E8E8E8",
  activeColor = "#92CEB1",
  textColor = "#333333",
  onStepChange,
  gesturesEnabled = true,
}) => {
  const progress = useSharedValue(0);
  const trackWidth = useRef(0);
  const initialX = useRef(0);
  const initialProgress = useRef(0);

  useEffect(() => {
    // Ensure progress stays within valid bounds
    const newProgress = Math.max(
      0,
      Math.min(1, (currentStep - 1) / (totalSteps - 1))
    );
    progress.value = withSpring(newProgress, SPRING_CONFIG);
  }, [currentStep, totalSteps]);

  const updateStep = (progressValue: number) => {
    if (!trackWidth.current) return;

    // Ensure progress value is properly bounded
    const clampedProgress = Math.max(0, Math.min(1, progressValue));
    const step = Math.round(clampedProgress * (totalSteps - 1)) + 1;

    if (onStepChange && step !== currentStep) {
      onStepChange(step);
    }
  };

  const calculateProgress = (pageX: number) => {
    if (!trackWidth.current) return progress.value;

    // Calculate relative position and clamp between 0 and trackWidth
    const relativeX = Math.max(0, Math.min(pageX - 20, trackWidth.current));
    // Ensure we return a value between 0 and 1
    return Math.max(0, Math.min(1, relativeX / trackWidth.current));
  };

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => gesturesEnabled,
        onMoveShouldSetPanResponder: () => gesturesEnabled,
        onPanResponderGrant: (evt) => {
          if (!gesturesEnabled) return;
          initialX.current = evt.nativeEvent.pageX;
          initialProgress.current = progress.value;
        },
        onPanResponderMove: (evt) => {
          if (!gesturesEnabled || !trackWidth.current) return;
          const newProgress = calculateProgress(evt.nativeEvent.pageX);
          progress.value = newProgress;
          runOnJS(updateStep)(newProgress);
        },
        onPanResponderRelease: (evt) => {
          if (!gesturesEnabled || !trackWidth.current) return;
          const newProgress = calculateProgress(evt.nativeEvent.pageX);
          progress.value = withSpring(newProgress, SPRING_CONFIG);
          runOnJS(updateStep)(newProgress);
        },
      }),
    [gesturesEnabled, progress, updateStep]
  );

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(`${progress.value * 100}%`, {
        ...SPRING_CONFIG,
        stiffness: 150, // Slightly softer for visual elements
      }),
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    return {
      left: withSpring(`${progress.value * 100}%`, {
        ...SPRING_CONFIG,
        stiffness: 150, // Slightly softer for visual elements
      }),
      transform: [
        {
          translateX: -20,
        },
      ],
    };
  });

  return (
    <Stack>
      <View
        style={[styles.container, !gesturesEnabled && { opacity: 0.7 }]}
        onLayout={(event) => {
          trackWidth.current = event.nativeEvent.layout.width - 40; // Adjust for padding
        }}
        {...panResponder.panHandlers}
      >
        <View style={[styles.track, { backgroundColor }]}>
          <Animated.View
            style={[
              styles.progress,
              { backgroundColor: activeColor },
              progressStyle,
            ]}
          />
        </View>
        <Animated.View
          style={[styles.circle, { backgroundColor: activeColor }, circleStyle]}
        >
          <Text color="white" fontWeight="bold" fontSize={16}>
            {currentStep}
          </Text>
        </Animated.View>
        <View style={styles.labels}>
          <Text color={textColor} fontSize={14}>
            1
          </Text>
          <Text color={textColor} fontSize={14}>
            {totalSteps}
          </Text>
        </View>
      </View>
    </Stack>
  );
};

export default Stepper;
