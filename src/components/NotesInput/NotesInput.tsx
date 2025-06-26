import { Input } from "@tamagui/input";
import React from "react";

interface NotesInputProps {
  notes: string;
  setNotes: (value: string) => void;
  backgroundColor: string;
  textColor: string;
}

const NotesInput: React.FC<NotesInputProps> = ({
  notes,
  setNotes,
  backgroundColor,
  textColor,
}) => (
  <Input
    placeholder="Anything you'd like to note today?"
    value={notes}
    onChangeText={(e) => setNotes(e.nativeEvent.text)}
    backgroundColor={backgroundColor}
    borderRadius={16}
    padding={16}
    color={textColor}
    marginBottom={24}
  />
);

export default NotesInput;
