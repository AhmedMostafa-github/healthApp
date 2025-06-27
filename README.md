# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Tech stack used

- React Native
- Tamagui
- Reanimated

## Implementation approach

• **Component-Based Architecture with Tamagui UI Framework**: The app uses a modular component structure where each UI element (MoodSelector, Stepper, NotesInput, etc.) is built as a reusable component using Tamagui, a cross-platform UI library that provides consistent styling and theming across React Native platforms. The components are organized in a clear hierarchy with proper prop interfaces for type safety.

• **State Management with React Hooks**: The implementation relies heavily on React's built-in state management using useState hooks for local component state (mood selection, sleep hours, notes, dark mode toggle, etc.). The state is managed at the screen level and passed down to child components as props, following a top-down data flow pattern that's simple and predictable for this single-screen application.

• **Custom Animation System with Reanimated**: The app implements a sophisticated animation system using React Native Reanimated for the success feedback animation. This includes custom hooks (useSuccessAnimation) that manage complex animation states, interpolated values, and timing functions to create smooth, performant animations that enhance the user experience when completing a health check-in.

## Design decisions

### Design Decision 1: Centralized Theme System with Color Constants

**Decision**: The app implements a centralized theme system using predefined color constants in `src/utils/constants.ts` that defines separate color palettes for light and dark modes.

**Rationale**: This design decision ensures consistent theming across the entire application by centralizing all color definitions. The `lightColors` and `darkColors` objects contain semantic color names (like `textPrimary`, `inputBackground`, `primaryAccent`) rather than hardcoded values, making it easy to maintain and update the app's visual identity. Components receive these colors as props, allowing for dynamic theme switching without needing to modify individual component styles. This approach also improves maintainability - if the brand colors need to change, developers only need to update the constants file rather than hunting through multiple component files.

### Design Decision 2: Multi-Stage Animation Sequence with Timing Orchestration

**Decision**: The success animation implements a complex multi-stage sequence using React Native Reanimated with carefully orchestrated timing delays and spring animations, rather than a simple fade-in/fade-out transition.

**Rationale**: This sophisticated animation design creates a more engaging and polished user experience. The animation sequence starts with a small circular element that scales up with a spring effect, then transforms into a full card while showing a checkmark that fades out. The content and close button appear with staggered timing. This multi-stage approach provides visual feedback that feels more substantial and celebratory than a basic transition, making the completion of a health check-in feel more rewarding. The use of `setTimeout` with precise timing values and spring configurations creates a smooth, professional animation that enhances the app's perceived quality and user satisfaction.
