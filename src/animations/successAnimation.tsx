import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Stack, Text } from "@tamagui/core";
import Animated from "react-native-reanimated";

import { styles } from "./successAnimation.styles";
import { SuccessAnimationProps } from "./successAnimation.types";
import { useSuccessAnimation } from "./useSuccessAnimation";

const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  visible,
  onAnimationComplete,
  suggestions,
  isDark,
}) => {
  const {
    containerStyle,
    cardStyle,
    checkmarkStyle,
    contentStyle,
    closeButtonStyle,
  } = useSuccessAnimation(visible);

  const handleClose = () => {
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0,0,0,0.3)"
      zIndex={999}
    >
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.View
          style={[
            styles.card,
            cardStyle,
            { backgroundColor: isDark ? "#2D2D2D" : "#FFFFFF" },
          ]}
        >
          <Animated.View style={[styles.closeButton, closeButtonStyle]}>
            <TouchableOpacity
              onPress={handleClose}
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            >
              <AntDesign
                name="close"
                size={24}
                color={isDark ? "#CCCCCC" : "#666666"}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.Text style={[styles.checkmark, checkmarkStyle]}>
            ✓
          </Animated.Text>
          <Animated.View style={[styles.content, contentStyle]}>
            <Text
              color={isDark ? "#FFFFFF" : "#333333"}
              fontSize={24}
              fontWeight="700"
              marginBottom={16}
              textAlign="center"
            >
              Here are some suggestions for you
            </Text>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {suggestions.map((suggestion, index) => (
                <Stack
                  key={index}
                  backgroundColor={isDark ? "#3D3D3D" : "#F5F5F5"}
                  padding={16}
                  borderRadius={12}
                  marginBottom={12}
                >
                  <Text color={isDark ? "#FFFFFF" : "#333333"} fontSize={16}>
                    {suggestion}
                  </Text>
                </Stack>
              ))}
            </ScrollView>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Stack>
  );
};

export default SuccessAnimation;
