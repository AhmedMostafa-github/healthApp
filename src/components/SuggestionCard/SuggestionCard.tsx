import React from "react";

import { Stack, Text } from "@tamagui/core";
import Animated, { FadeInUp } from "react-native-reanimated";

interface SuggestionCardProps {
  suggestion: string;
  index: number;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  suggestion,
  index,
}) => {
  const AnimatedStack = Animated.createAnimatedComponent(Stack);

  return (
    <AnimatedStack
      entering={FadeInUp.delay(index * 200)}
      backgroundColor="rgba(255,255,255,0.9)"
      borderRadius={16}
      padding={16}
      marginBottom={12}
      shadowColor="rgba(0,0,0,0.1)"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={4}
    >
      <Text color="#333" fontSize={16} lineHeight={24}>
        {suggestion}
      </Text>
    </AnimatedStack>
  );
};

export default SuggestionCard;
