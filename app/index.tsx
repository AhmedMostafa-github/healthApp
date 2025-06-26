import CheckInScreen from "@/src/screens/CheckInScreen/CheckIn";
import { TamaguiProvider } from "@tamagui/core";
import React from "react";
import tamaguiConfig from "../tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <CheckInScreen />
    </TamaguiProvider>
  );
}
