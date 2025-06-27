import React from "react";

import { ColorTokens } from "@tamagui/core";
import { Input } from "@tamagui/input";
interface NotesInputProps {
  notes: string;
  setNotes: any;
  backgroundColor: string;
  textColor: string;
  placeholderTextColor?: ColorTokens;
}

const NotesInput: React.FC<NotesInputProps> = ({
  notes,
  setNotes,
  backgroundColor,
  textColor,
  placeholderTextColor,
}) => (
  <Input
    placeholder="Anything you'd like to note today?"
    value={notes}
    onChangeText={(text) => setNotes(text)}
    backgroundColor={backgroundColor}
    borderRadius={16}
    padding={16}
    color={textColor}
    placeholderTextColor={placeholderTextColor}
    marginBottom={24}
    multiline={true}
    height={120}
  />
);

export default NotesInput;
