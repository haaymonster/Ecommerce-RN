import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CheckoutStatusBar from "../../components/CheckoutStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { icons } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Picker } from "@react-native-picker/picker";
import HeaderBar from "../../components/HeaderBar";

const Shipping = () => {
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const { from } = useLocalSearchParams();
  
  return (
    <SafeAreaView className="px-4 items-center bg-white h-full">
      <HeaderBar title="Checkout"></HeaderBar>
      <CheckoutStatusBar status="shipping" />
      <FormField
        title="Full Name"
        value={fullName}
        handleChangeText={(v) => setFullName(v)}
      />
      <FormField
        title="Phone Number"
        value={phoneNumber}
        handleChangeText={(v) => setPhoneNumber(v)}
      />
      <FormField
        title="Address"
        value={address}
        handleChangeText={(v) => setAddress(v)}
      />
      <FormField
        title="PostCode"
        value={postCode}
        handleChangeText={(v) => setPostCode(v)}
      />

      <CustomButton
        title="Save"
        handlePress={() =>
          router.push({
            pathname: "/payment",
            params: { fullName, phoneNumber, postCode, address, from },
          })
        }
        containerStyles="w-full absolute bottom-12"
        disabled={!phoneNumber || !fullName || !postCode || !address}
      ></CustomButton>
    </SafeAreaView>
  );
};

export default Shipping;
