import React from "react";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Stack } from "@tamagui/core";

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDark,
  onToggle,
}) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <Stack padding={8}>
        <Ionicons
          name={isDark ? "sunny" : "moon"}
          size={24}
          color={isDark ? "#FDB813" : "#333333"}
        />
      </Stack>
    </TouchableOpacity>
  );
};

export default DarkModeToggle;
