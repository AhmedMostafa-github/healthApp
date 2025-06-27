import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const ANIMATION_CONSTANTS = {
  SCREEN_WIDTH,
  CIRCLE_SIZE: 80,
  CARD_WIDTH: 340,
  CARD_HEIGHT: 400,
  TIMING: {
    CARD_ENTER: 500,
    CONTENT_FADE: 300,
    CLOSE_BUTTON_DELAY: 1000,
  },
} as const;
