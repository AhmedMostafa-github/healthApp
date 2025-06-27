import React, { useState } from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";

import { ColorTokens, Stack, Text, Theme } from "@tamagui/core";

import SuccessAnimation from "@/src/animations/SuccessAnimation";
import DarkModeToggle from "@components/DarkModeToggle/DarkModeToggle";
import Heading from "@components/Heading/Heading";
import MoodSelector from "@components/MoodSelector/MoodSelector";
import NotesInput from "@components/NotesInput/NotesInput";
import Stepper from "@components/Stepper/Stepper";
import SubmitButton from "@components/SubmitButton/SubmitButton";
import { darkColors, lightColors } from "@utils/constants";
import { getSuggestions } from "@utils/suggestions";

const CheckInScreen = () => {
  const [selectedMood, setSelectedMood] = useState(5);
  const [sleep, setSleep] = useState(8);
  const [notes, setNotes] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(8);
  const colors = isDark ? darkColors : lightColors;

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Theme name={isDark ? "dark" : "light"}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.backgroundGradient[0],
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Stack
            flex={1}
            alignItems="center"
            backgroundColor={colors.backgroundGradient[0]}
            padding={24}
          >
            <Stack
              width="100%"
              flexDirection="row"
              justifyContent="flex-end"
              marginBottom={16}
            >
              <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
            </Stack>
            <Stack
              width={340}
              backgroundColor={
                isDark ? "rgba(45,45,45,0.7)" : "rgba(255,255,255,0.7)"
              }
              borderRadius={32}
              padding={24}
            >
              <Heading color={colors.textPrimary} />
              <Text
                fontSize={18}
                fontWeight="600"
                color={colors.textPrimary}
                marginBottom={8}
              >
                Mood
              </Text>
              <MoodSelector
                selectedMood={selectedMood}
                setSelectedMood={setSelectedMood}
                backgroundColor={colors.inputBackground}
                accentColor={colors.primaryAccent}
              />
              <Text
                fontSize={18}
                fontWeight="600"
                color={colors.textPrimary}
                marginBottom={8}
              >
                How Many Hours Did You Sleep?
              </Text>
              <Stepper
                currentStep={currentStep}
                onStepChange={setCurrentStep}
                activeColor={colors.primaryAccent}
                backgroundColor={colors.inputBackground}
                textColor={colors.textPrimary}
              />
              <Text
                fontSize={18}
                fontWeight="600"
                color={colors.textPrimary}
                marginBottom={8}
              >
                Notes
              </Text>

              <NotesInput
                notes={notes}
                setNotes={setNotes}
                backgroundColor={colors.inputBackground}
                textColor={colors.textPrimary}
                placeholderTextColor={colors.textPrimary as ColorTokens}
              />
              <SubmitButton
                onPress={handleSubmit}
                backgroundColor={colors.buttonBackground}
                title="Check In"
              />
            </Stack>
            {showSuccess && (
              <SuccessAnimation
                visible={showSuccess}
                onAnimationComplete={() => setShowSuccess(false)}
                suggestions={getSuggestions(selectedMood, sleep)}
                isDark={isDark}
              />
            )}
          </Stack>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Theme>
  );
};

export default CheckInScreen;
