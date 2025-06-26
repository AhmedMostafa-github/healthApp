import Heading from "@components/Heading/Heading";
import MoodSelector from "@components/MoodSelector/MoodSelector";
import NotesInput from "@components/NotesInput/NotesInput";
import SleepSlider from "@components/SleepSlider/SleepSlider";
import SubmitButton from "@components/SubmitButton/SubmitButton";
import { Stack, Theme } from "@tamagui/core";
import { darkColors, lightColors } from "@utils/constants";
import React, { useState } from "react";

const CheckInScreen = () => {
  const [selectedMood, setSelectedMood] = useState(5);
  const [sleep, setSleep] = useState(8);
  const [notes, setNotes] = useState("");
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Theme name={isDark ? "dark" : "light"}>
      <Stack
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor={colors.backgroundGradient[0]}
        padding={24}
      >
        <Stack
          width={340}
          backgroundColor="rgba(255,255,255,0.7)"
          borderRadius={32}
          padding={24}
        >
          <Heading />
          <MoodSelector
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            backgroundColor={colors.inputBackground}
            accentColor={colors.primaryAccent}
          />
          <SleepSlider
            sleep={sleep}
            setSleep={setSleep}
            accentColor={colors.primaryAccent}
            textColor={colors.textPrimary}
          />
          <NotesInput
            notes={notes}
            setNotes={setNotes}
            backgroundColor={colors.inputBackground}
            textColor={colors.textPrimary}
          />
          <SubmitButton
            onPress={() => {}}
            backgroundColor={colors.buttonBackground}
          />
        </Stack>
      </Stack>
    </Theme>
  );
};

export default CheckInScreen;
