import Slider from "@react-native-community/slider";
import { Text } from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import React from "react";

interface SleepSliderProps {
  sleep: number;
  setSleep: (value: number) => void;
  accentColor: string;
  textColor: string;
}

const SleepSlider: React.FC<SleepSliderProps> = ({
  sleep,
  setSleep,
  accentColor,
  textColor,
}) => (
  <YStack alignItems="center" marginBottom={24}>
    <Slider
      style={{ width: "100%" }}
      minimumValue={1}
      maximumValue={12}
      step={1}
      value={sleep}
      onValueChange={setSleep}
      minimumTrackTintColor={accentColor}
      maximumTrackTintColor="#eee"
      thumbTintColor={accentColor}
    />
    <XStack width="100%" justifyContent="space-between">
      <Text color={textColor}>1</Text>
      <Text fontSize={20} fontWeight="700" color={accentColor}>
        {sleep}
      </Text>
      <Text color={textColor}>12</Text>
    </XStack>
  </YStack>
);

export default SleepSlider;
