import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ANIMATION_CONSTANTS } from "./successAnimation.constants";

export const useSuccessAnimation = (visible: boolean) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const checkmarkScale = useSharedValue(0);
  const checkmarkOpacity = useSharedValue(1);
  const cardWidth = useSharedValue<number>(ANIMATION_CONSTANTS.CIRCLE_SIZE);
  const cardHeight = useSharedValue<number>(ANIMATION_CONSTANTS.CIRCLE_SIZE);
  const borderRadius = useSharedValue<number>(
    ANIMATION_CONSTANTS.CIRCLE_SIZE / 2
  );
  const contentOpacity = useSharedValue(0);
  const closeButtonOpacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      scale.value = 0;
      opacity.value = 0;
      checkmarkScale.value = 0;
      checkmarkOpacity.value = 1;
      cardWidth.value = ANIMATION_CONSTANTS.CIRCLE_SIZE;
      cardHeight.value = ANIMATION_CONSTANTS.CIRCLE_SIZE;
      borderRadius.value = ANIMATION_CONSTANTS.CIRCLE_SIZE / 2;
      contentOpacity.value = 0;
      closeButtonOpacity.value = 0;

      opacity.value = withTiming(1, { duration: 400 });
      scale.value = withTiming(0.3, { duration: 400 });

      setTimeout(() => {
        scale.value = withSpring(1, {
          damping: 10,
          stiffness: 80,
          mass: 1,
        });
      }, 400);

      setTimeout(() => {
        scale.value = withTiming(1.1, { duration: 200 });
      }, 400);

      setTimeout(() => {
        checkmarkScale.value = withSpring(1, {
          damping: 15,
          stiffness: 100,
        });
      }, 300);

      setTimeout(() => {
        checkmarkOpacity.value = withTiming(0, { duration: 300 });
        cardWidth.value = withTiming(ANIMATION_CONSTANTS.CARD_WIDTH, {
          duration: 500,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        });
        cardHeight.value = withTiming(ANIMATION_CONSTANTS.CARD_HEIGHT, {
          duration: 500,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        });
        borderRadius.value = withTiming(32, {
          duration: 500,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        });
      }, 1000);

      setTimeout(() => {
        contentOpacity.value = withTiming(1, {
          duration: 300,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        });
      }, 1500);

      closeButtonOpacity.value = withDelay(
        ANIMATION_CONSTANTS.TIMING.CLOSE_BUTTON_DELAY,
        withSpring(1, {
          damping: 15,
          stiffness: 100,
        })
      );
    } else {
      opacity.value = withTiming(0, { duration: 200 });
      scale.value = withTiming(0, { duration: 200 });
      checkmarkScale.value = withTiming(0, { duration: 200 });
      contentOpacity.value = withTiming(0, { duration: 200 });
      closeButtonOpacity.value = withTiming(0, { duration: 200 });
    }
  }, [visible]);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const cardStyle = useAnimatedStyle(() => ({
    width: cardWidth.value,
    height: cardHeight.value,
    borderRadius: borderRadius.value,
    transform: [{ scale: scale.value }],
  }));

  const checkmarkStyle = useAnimatedStyle(() => ({
    transform: [{ scale: checkmarkScale.value }],
    opacity: checkmarkOpacity.value,
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
  }));

  const closeButtonStyle = useAnimatedStyle(() => ({
    opacity: closeButtonOpacity.value,
    transform: [{ scale: closeButtonOpacity.value }],
  }));

  return {
    containerStyle,
    cardStyle,
    checkmarkStyle,
    contentStyle,
    closeButtonStyle,
  };
};
