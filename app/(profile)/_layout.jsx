import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="order"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default ProfileLayout;
