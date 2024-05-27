import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router, useLocalSearchParams } from "expo-router";
import { icons } from "../../constants";
import CheckoutStatusBar from "../../components/CheckoutStatusBar";
import HeaderBar from "../../components/HeaderBar";

const Payment = () => {
  const [cardHolder, setCardHolder] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expiration, setExpiration] = useState(null);
  const [cvv, setCvv] = useState(null);
  const localParams = useLocalSearchParams();
  return (
    <SafeAreaView className="px-4 items-center bg-white h-full">
      <HeaderBar title="Checkout"></HeaderBar>
      <CheckoutStatusBar status="payment" />
      <FormField
        title="Card Holder Name"
        placeholder="Enter card holder name"
        value={cardHolder}
        handleChangeText={(v) => setCardHolder(v)}
      />
      <FormField
        title="Card Number"
        placeholder="4111 1111 1111 1111"
        value={cardNumber}
        handleChangeText={(v) => setCardNumber(v)}
      />
      <View className="flex-row w-full justify-between">
        <FormField
          title="Expiration"
          placeholder="MM/YY"
          value={expiration}
          inputLength="w-[170px]"
          handleChangeText={(v) => setExpiration(v)}
        />
        <FormField
          title="CVV"
          placeholder="123"
          value={cvv}
          inputLength="w-[170px]"
          handleChangeText={(v) => setCvv(v)}
        />
      </View>
      <CustomButton
        title="Continue"
        handlePress={() =>
          router.push({ pathname: "/review", params: localParams })
        }
        containerStyles="w-full absolute bottom-12"
        disabled={!cardHolder || !cardNumber || !expiration || !cvv}
      ></CustomButton>
    </SafeAreaView>
  );
};

export default Payment;
