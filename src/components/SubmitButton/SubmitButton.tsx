import React from "react";

import { Button } from "@tamagui/button";

interface SubmitButtonProps {
  onPress: () => void;
  backgroundColor: string;
  title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  backgroundColor,
  title,
}) => (
  <Button
    backgroundColor={backgroundColor}
    borderRadius={16}
    fontSize={20}
    color="#fff"
    fontWeight="700"
    onPress={onPress}
  >
    {title}
  </Button>
);

export default SubmitButton;
