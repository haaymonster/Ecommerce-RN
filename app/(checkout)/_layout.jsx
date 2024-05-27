import React from "react";
import { Stack } from "expo-router";

const CheckoutLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="shipping"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="payment"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="review"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="orderPlaced"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default CheckoutLayout;
