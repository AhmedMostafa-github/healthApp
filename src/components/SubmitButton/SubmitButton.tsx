import { Button } from "@tamagui/button";
import React from "react";

interface SubmitButtonProps {
  onPress: () => void;
  backgroundColor: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  backgroundColor,
}) => (
  <Button
    backgroundColor={backgroundColor}
    borderRadius={16}
    paddingVertical={16}
    fontSize={20}
    color="#fff"
    fontWeight="700"
    onPress={onPress}
  >
    Check In
  </Button>
);

export default SubmitButton;
