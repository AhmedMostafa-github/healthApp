import React from "react";

import { Text } from "@tamagui/core";
interface HeadingProps {
  color: string;
}

const Heading: React.FC<HeadingProps> = ({ color }) => (
  <Text fontSize={32} fontWeight="700" marginBottom={24} color={color}>
    How are you feeling today?
  </Text>
);

export default Heading;
