import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderSuccess from "../../assets/images/order-success.png";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const OrderPlaced = () => {
  return (
    <SafeAreaView className="px-4 items-center bg-white h-full justify-center">
      <View className="w-[328px] h-[408px] items-center justify-center bg-cyan-50 rounded-2xl mb-4">
        <Image source={OrderSuccess} className="w-[240px] h-[240px]"></Image>
      </View>
      <Text className="text-center font-psemibold pb-6 text-2xl">
        Your order has been placed successfully
      </Text>
      <Text className="text-center text-gray-400 pb-6">
        Thank you for choosing us! Feel free to continue shopping and explore
        our wide range of products. Happy Shopping!
      </Text>
      <CustomButton
        title="Continue Shopping"
        containerStyles="w-full"
        handlePress={() => router.replace("/home")}
      ></CustomButton>
    </SafeAreaView>
  );
};

export default OrderPlaced;
