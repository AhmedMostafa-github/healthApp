import { Stack, Text } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import React from "react";

const moods = [
  { emoji: "😃", value: 5 },
  { emoji: "🙂", value: 4 },
  { emoji: "😐", value: 3 },
  { emoji: "😕", value: 2 },
  { emoji: "😡", value: 1 },
];

interface MoodSelectorProps {
  selectedMood: number;
  setSelectedMood: (value: number) => void;
  backgroundColor: string;
  accentColor: string;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  setSelectedMood,
  backgroundColor,
  accentColor,
}) => (
  <XStack
    marginBottom={24}
    backgroundColor={backgroundColor}
    borderRadius={24}
    padding={12}
    justifyContent="space-between"
  >
    {moods.map((mood) => (
      <Stack
        key={mood.value}
        alignItems="center"
        justifyContent="center"
        width={48}
        height={48}
        borderRadius={24}
        backgroundColor={
          selectedMood === mood.value ? accentColor : "transparent"
        }
        onPress={() => setSelectedMood(mood.value)}
        style={{ cursor: "pointer" }}
      >
        <Text fontSize={28}>{mood.emoji}</Text>
      </Stack>
    ))}
  </XStack>
);

export default MoodSelector;
