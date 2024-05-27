import { Image, Text, View } from "react-native";
import React from "react";
import { icons } from "../constants";

const CheckoutStatusBar = ({ status }) => {
  return (
    <View className="flex-row w-[280px] justify-between items-center">
      <View className="items-center">
        <Image
          source={status === "shipping" ? icons.boxOutline : icons.boxFill}
          className="w-[24px] h-[24px] mb-0.5"
        ></Image>
        <Text className={`${status !== "shipping" && "text-primary"}`}>
          Shipping
        </Text>
      </View>
      <View className="h-[1px] w-[48px] bg-gray-400"></View>
      <View className="items-center">
        <Image
          source={
            status === "shipping"
              ? icons.payGray
              : status === "payment"
              ? icons.payOutline
              : icons.payFill
          }
          className="w-[24px] h-[24px]"
        ></Image>
        <Text
          className={`${
            status === "payment"
              ? "text-black-100"
              : status === "review"
              ? "text-primary"
              : "text-gray-500"
          }`}
        >
          Payment
        </Text>
      </View>
      <View className="h-[1px] w-[48px] bg-gray-400"></View>
      <View className="items-center">
        <Image
          source={status === "review" ? icons.reviewOutline : icons.reviewGray}
          className="w-[24px] h-[24px]"
        ></Image>
        <Text
          className={`${
            status === "review" ? "text-black-100" : "text-gray-500"
          }`}
        >
          Review
        </Text>
      </View>
    </View>
  );
};

export default CheckoutStatusBar;
