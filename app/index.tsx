import React from "react";

import { TamaguiProvider } from "@tamagui/core";
import tamaguiConfig from "../tamagui.config";

import CheckInScreen from "@/src/screens/CheckInScreen/CheckIn";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <CheckInScreen />
    </TamaguiProvider>
  );
}
