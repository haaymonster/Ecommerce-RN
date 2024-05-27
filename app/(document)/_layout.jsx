import React from "react";
import { Stack } from "expo-router";

const DocumentLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="privacyPolicy"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default DocumentLayout;
